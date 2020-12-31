# idcustomer = 1
# username = "dangtrungdu"
# password = "du1234"
#
# customer = User.User(idcustomer, username, password)
# # customer.show_info_name()
# d1 = {1: 1, 2: 2}
# d2 = {2: 'ha!', 3: 3}
# print(type(d1))
# print(type(d2))
# d1.update(d2)
# print(d1)
dicion = {'0': {'add': None, 'id': '1', 'name': 'admin', 'password': '1234', 'phone': None, 'username': 'admin@gmail.com'}, '1': {'add': None, 'id': '2', 'name': 'admin', 'password': '1234', 'phone': None, 'username': 'admintest@gmail.com'
}, '2': {'add': None, 'id': '3', 'name': 'admin', 'password': '1234', 'phone': None, 'username': 'admin1@gmail.com'}, '3': {'add': None, 'id': '4', 'name': 'admin', 'password': '1234', 'phone': None, 'username': 'admin2@gmail.com'
}}
for i in range(0, len(dicion)):
    dic = dicion.get(str(i))
    print (dic.get('username'))
print(type(dicion))
print(len(dicion))
