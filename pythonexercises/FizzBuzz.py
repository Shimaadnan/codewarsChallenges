#Write your code below this row 👇

for number in range(0,101):
    if number%15==0:
        print('FizzBuzz')
    elif number%3==0:
        print('Fizz')
    elif number%5==0:
        print('Buzz')
    else:
        print(number)
print('You are great')