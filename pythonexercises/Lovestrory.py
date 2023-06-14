# 🚨 Don't change the code below 👇
print("Welcome to the Love Calculator!")
name1 = input("What is your name? \n")
name2 = input("What is their name? \n")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇


name1_to_lower=name1.lower()
name2_to_lower=name2.lower()
totaltrure_name1and2=name1_to_lower.count("t")+ name1_to_lower.count("r")+name1_to_lower.count("u")+name1_to_lower.count("e")+name2_to_lower.count("t")+name2_to_lower.count("r")+name2_to_lower.count("u")+name2_to_lower.count("e")
totallovename1and2=name1_to_lower.count("l")+ name1_to_lower.count("o")+name1_to_lower.count("v")+name1_to_lower.count("e")+name2_to_lower.count("l")+name2_to_lower.count("o")+name2_to_lower.count("v")+name2_to_lower.count("e")
res=str(totaltrure_name1and2)+str(totallovename1and2)
convertnum=int(res)
if convertnum < 10 & convertnum>90:
    print(f"your score is {convertnum} No")
elif convertnum > 40 & convertnum <50:
    print(f"your scotre is {convertnum} good")   
else:
    print(f"your score is {convertnum}")