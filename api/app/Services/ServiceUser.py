from app.Services import Connection
import secrets

secret = secrets.token_urlsafe(32)


def check_Login(email, password):
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:
            # Read a single record
            # cursor.execute('SELECT * FROM accounts WHERE username = %s AND password = %s', (username, password,))
            sql = "SELECT * FROM `user` WHERE username = %s AND password = %s"
            cursor.execute(sql, (email, password))
            data = cursor.fetchall()
            if (len(data) > 0):
                temp = data[0]
                result = {"Status": "Success"}
                result.update(temp)
                return result
                # return url_for('/get/homepage', methods=['GET'])
            else:
                result = {"Status": "Invalid"}
                user = {"username": email, 'password': password}
                result.update(user)
                return result
        connection.commit()
    finally:
        connection.close()
# check_Login('dangtrungdu@gmail.com', '1234')

def check_account(email, phone):
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM `user` WHERE username = %s AND phone = %s"
            cursor.execute(sql, (email, phone))
            data = cursor.fetchall()
            if (len(data) > 0):
                temp = data[0]
                result = {"Status": "Success"}
                result.update(temp)
                return result
            else:
                result = {"Status": "Invalid"}
                user = {"username": email, 'phone': phone}
                result.update(user)
                return result
        connection.commit()
    finally:
        connection.close()

def resetPassword (id, password):
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:
            # Read a single record
            # cursor.execute('SELECT * FROM accounts WHERE username = %s AND password = %s', (username, password,))
            sql = "UPDATE `user` SET `password`=%s where `id` = %s"
            cursor.execute(sql, (password, id))
        connection.commit()

        with connection.cursor() as cursor:
            sql = "SELECT * FROM `user` WHERE `id`=%s AND `password`=%s"
            cursor.execute(sql, (id,password))
            temp = cursor.fetchall()
            if (len(temp) > 0):
                result = {"Status": "Success"}
                return result
            else:
                result = {"Status": "Invalid"}
                return result
    finally:
        connection.close()

def create_user(email, password, name, phone):
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:
            sql = "SELECT `username`, `password` FROM `user` WHERE `username`=%s"
            cursor.execute(sql, (email,))
            temp = cursor.fetchall()
            if (len(temp) > 0):
                dic = {
                    'Status': 'Error',
                    "Message": "Email is available !, please choose another email or reset password"
                }
                return dic
            else:
                with connection.cursor() as cursor:
                    sql = "INSERT INTO `user` (`username`, `password`, `name`, `phone`) VALUES (%s, %s, %s, %s)"
                    cursor.execute(sql, (email, password, name, phone))
                connection.commit()

                with connection.cursor() as cursor:
                    sql = "SELECT * FROM `user` WHERE `username`=%s"
                    cursor.execute(sql, (email,))
                    result = cursor.fetchall()
                    dic = {
                        'Status': 'Success',
                        'Message': "Account successfully created",
                        'id': str(result[0].get('id')),
                        'password': result[0].get('password'),
                        "username": str(result[0].get('username')),
                        "name": str(result[0].get('name')),
                        "phone": str(result[0].get('phone')),
                    }
                    return dic
    finally:
        connection.close()
create_user('dangtrungdutest@gmail.com', 'du86262100', 'name', 'phone')

def insert_user(email, password):
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:
            sql = "SELECT `username`, `password` FROM `user` WHERE `username`=%s"
            cursor.execute(sql, (email,))
            temp = cursor.fetchall()
            if (len(temp) > 0):
                dic = {
                    'Status': 'Error',
                    "Message": "Email is available !, please choose another email or reset password"
                }
                result =dic
                return result
            else:
                with connection.cursor() as cursor:
                    sql = "INSERT INTO `user` (`username`, `password`) VALUES (%s, %s)"
                    cursor.execute(sql, (email, password))
                connection.commit()

                with connection.cursor() as cursor:
                    sql = "SELECT * FROM `user` WHERE `username`=%s"
                    cursor.execute(sql, (email,))
                    result = cursor.fetchall()
                    dic = {
                        'Status': 'Success',
                        'Message': "Account successfully created",
                        'id': str(result[0].get('id')),
                        'password': result[0].get('password'),
                        "username": str(result[0].get('username')),
                    }
                    result = dic
                    return result
    finally:
        connection.close()


def get_all_user():
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:
            # Read a single record
            sql = "SELECT * FROM `user`"
            cursor.execute(sql)
            temp = cursor.fetchall()
            return temp
    finally:
        connection.close()
