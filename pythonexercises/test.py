n = 1024
while n > 0:
  print (n % 10)
  n = n // 10
  # title
  def format_name(f_name,l_name):
    f_name=f_name.title()
    l_name=l_name.title()
    return f_name + l_name

print(format_name('shima','adnan'))