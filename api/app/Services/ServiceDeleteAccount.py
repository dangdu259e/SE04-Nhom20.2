from app.Services import Connection
import secrets

secret = secrets.token_urlsafe(32)


def delete_account(id, newemail, newpassword, newname, newadd, newphone):
    # connect DB MYSQL
    connection = Connection.ConnectionDB()
    # Query and check
    try:
        with connection.cursor() as cursor:

            # sql = "UPDATE `user` SET `username` = %s,`password` = %s,`name`= %s , `add` = %s , `phone`= %s WHERE `id` = %s"
            sql = "DELETE FROM `user` where `id` = %s and `username` = %s and `password`= %s and `name`=%s and `add` = %s and `phone`= %s;"
            cursor.execute(sql, (id, newemail, newpassword, newname, newadd, newphone))
        connection.commit()
        return 'Success'
    finally:
        connection.close()

# delete_account('20','nguyenvane@gmail.com','1234','user','NhaTrang','0913241134')