#Creating a Bill Generator for helping the shops to calculate the bill swiftly and making the process faster.
sum=0
while(True):
    userInput=input("Enter the price of the item: \n")
    if(userInput!='Q'):
        sum=sum+float(userInput)
        print(f"Order Total so far {sum}. Continue shopping or press Q to exit.")
    else:
        print(f"Your Bill Total is: {sum}.\nThanks for shopping with us.")
        break
