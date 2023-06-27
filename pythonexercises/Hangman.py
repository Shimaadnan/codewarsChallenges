import random
word_list = ["aardvark", "baboon", "camel"]
chosen_word=random.choice(word_list)
guess=input("Please guess a letter \n")
for letter in chosen_word:
  if letter==guess:
    print('Right')
  else:
    print('wrong')