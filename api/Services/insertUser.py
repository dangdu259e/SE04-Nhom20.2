from Services import Connection
import secrets

secret = secrets.token_urlsafe(32)


def insert_user(email, password):
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:
            sql = "SELECT `username`, `password` FROM `khachhang` WHERE `username`=%s"
            cursor.execute(sql, (email,))
            temp = cursor.fetchall()
            if (len(temp) > 0):
                dic = {"Error": "Email is available !, please choose another email or reset password"}
                return dic
            else:
                with connection.cursor() as cursor:
                    sql = "INSERT INTO `khachhang` (`username`, `password`) VALUES (%s, %s)"
                    cursor.execute(sql, (email, password))
                connection.commit()

                with connection.cursor() as cursor:
                    sql = "SELECT * FROM `khachhang` WHERE `username`=%s"
                    cursor.execute(sql, (email,))
                    result = cursor.fetchall()
                    diction = {
                        'Success': "Account successfully created",
                        'id': result[0].get('id'),
                        'password': result[0].get('password'),
                        "username": result[0].get('username'),
                    }
                    return diction
    finally:
        connection.close()
