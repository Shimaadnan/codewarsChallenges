# n = 1024
# while n > 0:
#   print (n % 10)
#   n = n // 10
#   # title
#   def format_name(f_name,l_name):
#     f_name=f_name.title()
#     l_name=l_name.title()
#     return f_name + l_name

# print(format_name('shima','adnan'))
def add(n1, n2):
  return n1 + n2
 
def subtract(n1, n2):
  return n1 - n2
 
def multiply(n1, n2):
  return n1 * n2
 
def divide(n1, n2):
  return n1 / n2
 
print(add(2, multiply(5, divide(8, 4))))
def outer_function(a, b):
    def inner_function(c, d):
        return c + d
    return inner_function(a, b)
 
result = outer_function(5, 10)
print(result)