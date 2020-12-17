# Python3 program to convert a  
# list into a tuple 
def convert(list):
    return tuple(list)


# Driver function
list = [1, 2, 3, 4]
dic = {1,2,3,4,5,5,4,4,3,2,2}
print(len(dic))
dica = {
  "0": {
    "add": "null",
    "id": "1",
    "name": "admin",
    "password": "1234",
    "phone": "null",
    "username": "admin@gmail.co\r\nm"
  },
  "1": {
    "add": "null",
    "id": "2",
    "name": "admin",
    "password": "1234",
    "phone": "null",
    "username": "admintest@\r\ngmail.com"
  },
  "2": {
    "add": "null",
    "id": "3",
    "name": "admin",
    "password": "1234",
    "phone": "null",
    "username": "ad\r\nmin1@gmail.com"
  },
  "3": {
    "add": "null",
    "id": "4",
    "name": "admin",
    "password": "1234",
    "phone": "null",
    "username": "admin2@gmail.com"
  }
}
listdata = []

for i in range(0, len(dica)):
  temp = dica.get(str(i))
  listdata.append(temp)

for i in listdata:
  print(i.get('username'))