birds={}
def biggestbid(object):
  highestbid=0
  for person in object:
    if float(birds[person])>float(highestbid):
         highestbid=birds[person]
         winner=person
  print(f"the winner is {winner}")    

  anyoneinroom=False
while not anyoneinroom:
  name=input('what is your name: ')
  price=input('what is your price')
  birds[name]=price
  leftanyone=input('anyone in the room type yes or no\n')
  if leftanyone=='no':
    anyoneinroom=True
    biggestbid(birds)
  elif leftanyone=='yes':
    anyoneinroom=False