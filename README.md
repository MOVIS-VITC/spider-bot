<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QUAD BOT CONTROLLER</title>
    <style>
        body {
            font-family: "Ubuntu", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200vh;
            margin: 0;
            background-color: white;
            background-image: url("https://static.electronicsweekly.com/wp-content/uploads/2016/11/21102254/quad-bot-12.jpg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        .controller {
            text-align:center;
            background: 50px;
            border-radius: 200px;
            box-shadow: 0px rgba(19, 18, 18, 0.2);
        }
        .controller button {
            font-size: 20px;
            margin: 20px;
            padding: 10px 20px;
            border:none;
            border-radius: 15px;
            cursor: pointer;
            text-align: left;
        }
        .controller .connect {
            background-color: #4CAF50;
            color: white;
        }
        .controller .movement {
            background-color: #008CBA;
            color: white;
        }
        .controller button:hover {
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <script>
        document.addEventListener('keydown', function(event) {
            switch(event.key.toLowerCase()) {
                case 'w':
                    move('forward');
                    break;
                case 'a': 
                    move('left');
                    break;
                case 'd':
                    move('right');
                    break;
                case 's':
                    move('backward');
                    break;
            }
        });
    </script>
    <div class="controller">
        <h1><i>QUAD BOT CONTROLLER</i></h1>
        <button class="connect" onclick="connectToBot()"><b>Connect to Bot</b></button>
        <div>
            <button class="movement" onclick="move('forward')">Forward or W</button>
        </div>
        <div>
            <button class="movement" onclick="move('left')">Left or A</button>
            <button class="movement" onclick="move('right')">Right or D</button>
        </div>
        <div>
            <button class="movement" onclick="move('backward')">Backward or S</button>
        </div>
    </div>

    <script>
        let bluetoothDevice = null;
        let gattServer = null;
        let controlCharacteristic = null;

        const SERVICE_UUID = '00001234-0000-1000-8000-00805f9b34fb'; 
        const CHARACTERISTIC_UUID = '00005678-0000-1000-8000-00805f9b34fb';

        async function connectToBot() {
            try {
                // Request a Bluetooth device
                bluetoothDevice = await navigator.bluetooth.requestDevice({
                    acceptAllDevices: true, // You can filter by name or services if needed
                    optionalServices: [SERVICE_UUID] // Replace with your bot's service UUID
                });

                // Connect to GATT Server
                gattServer = await bluetoothDevice.gatt.connect();

                // Get the service
                const service = await gattServer.getPrimaryService(SERVICE_UUID);

                // Get the control characteristic
                controlCharacteristic = await service.getCharacteristic(CHARACTERISTIC_UUID);

                alert("Connected to the bot!");
            } catch (error) {
                console.error('Error connecting to the bot:', error);
                alert('Failed to connect to the bot. Please try again.');
            }
            }

        async function move(direction) {
            if (!controlCharacteristic) {
                alert("Please connect to the bot first!");
                return;
            }

            // Map movement commands to byte values (example: 'forward' -> 0x01)
            const commands = {
                forward: 0x01,
                backward: 0x02,
                left: 0x03,
                right: 0x04
            };

            const command = commands[direction];
            if (command === undefined) {
                console.error('Invalid direction:', direction);
                return;
            }

            try {
                // Write the movement command to the characteristic
                const commandBuffer = new Uint8Array([command]);
                await controlCharacteristic.writeValue(commandBuffer);
                console.log(`Sent command: ${direction}`);
            } catch (error) {
                console.error('Error sending command:', error);
            }
        }
    </script>
</body>
</html>

