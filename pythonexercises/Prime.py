
def prime_checker(number):
    count=0
    for num in range(1,number):
        if num!=1 and number%num==0:
           count+=1

    if count>0:
        print('not prime')
    else:
        print('Prime')               



#Write your code above this line 👆
    
#Do NOT change any of the code below👇
n = int(input("Check this number: "))
prime_checker(number=n)