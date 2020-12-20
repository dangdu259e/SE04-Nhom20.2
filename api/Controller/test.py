from Entity import User

# idcustomer = 1
# username = "dangtrungdu"
# password = "du1234"
#
# customer = User.User(idcustomer, username, password)
# customer.show_info_name()
d1 = {1: 1, 2: 2}
d2 = {2: 'ha!', 3: 3}
print(type(d1))
print(type(d2))
d1.update(d2)
print(d1)
