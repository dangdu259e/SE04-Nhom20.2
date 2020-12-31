from app.Services import Connection
import secrets

secret = secrets.token_urlsafe(32)

def update_account(id, newemail, newpassword, newname, newadd, newphone):
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:
            sql = "UPDATE `user` SET `username` = %s,`password` = %s,`name`= %s , `add` = %s , `phone`= %s WHERE `id` = %s"
            cursor.execute(sql, (newemail, newpassword, newname, newadd, newphone, id))
            data = cursor.fetchall()
        connection.commit()
        return 'Success'
    finally:
        connection.close()

# update_account("3", "dangtrungdu@gmail.com",'12344', 'user', "Minh Khai", "0984640898")
