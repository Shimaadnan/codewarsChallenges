print("Welcome to the rollercoaster")
height=int(input("What is your height"))
bill=0
if height>=120:
    print("you can go to the rollercoaster")
    age=int(input("what is your age"))
    if age < 12:
        bill+=5
        print(f"Child tickets are ${bill}")
    elif age <=18:
        bill+=7
        print(f"Youth tickets are ${bill}")
    else:
        bill+=12
        print(f"Adult tickets are ${bill}")
wantsPhoto=input("Do you want a photo: Y or N")
if wantsPhoto=="Y":
    bill+=3
    print(f"your bill is ${bill}")
else:
 print("You can not use it")