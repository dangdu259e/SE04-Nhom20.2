from app.Services import Connection
import secrets
from collections import OrderedDict

secret = secrets.token_urlsafe(32)

def check_Login(email, password):
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:
            # Read a single record
            # cursor.execute('SELECT * FROM accounts WHERE username = %s AND password = %s', (username, password,))
            sql = "SELECT * FROM `admin` WHERE username = %s AND password = %s"
            cursor.execute(sql, (email, password))
            data = cursor.fetchall()
            if (len(data) > 0):
                temp = data[0]
                result = {"Status": "Success"}
                result.update(temp)
                return result
            else:
                result = {"Status": "Invalid"}
                user = {"username": email, 'password': password}
                result.update(user)
                return result
        connection.commit()
    finally:
        connection.close()

def insert_admin(email, password):
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:
            sql = "SELECT `username`, `password` FROM `admin` WHERE `username`=%s"
            cursor.execute(sql, (email,))
            temp = cursor.fetchall()
            if (len(temp) > 0):
                dic = {
                    'Status': 'Error',
                    "Message": "Email is available !, please choose another email or reset password"
                }
                result = OrderedDict(dic)
                return result
            else:
                with connection.cursor() as cursor:
                    sql = "INSERT INTO `admin` (`username`, `password`) VALUES (%s, %s)"
                    cursor.execute(sql, (email, password))
                connection.commit()

                with connection.cursor() as cursor:
                    sql = "SELECT * FROM `admin` WHERE `username`=%s"
                    cursor.execute(sql, (email,))
                    result = cursor.fetchall()
                    dic = {
                        'Status': 'Success',
                        'Message': "Account successfully created",
                        'id': result[0].get('id'),
                        'password': result[0].get('password'),
                        "username": result[0].get('username'),
                    }
                    result = OrderedDict(dic)
                    return result
    finally:
        connection.close()

def get_all_admin():
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:
            # Read a single record
            sql = "SELECT * FROM `admin`"
            cursor.execute(sql)
            temp = cursor.fetchall()
            return temp
    finally:
        connection.close()
