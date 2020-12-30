from pymysql import DatabaseError

from app.Services import db_connection
from app.Entity_RN import entitybill


def save_bill(one):
    conn = db_connection.ConnectionDB()
    status = '200'
    try:
        with conn.cursor() as cursor:
            sql = "INSERT INTO `bill` (`name`, `phone`, `address`, `note`, `id_user`, `id_cat`)" \
                  " VALUES (%s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, (one.name, one.phone, one.add, one.note, one.id_user, one.id_cat))

        conn.commit()
    except DatabaseError as e:
        status = 'failed'
        print(e)
    finally:
        conn.close()
        return status


# one = entitybill.bill_enti(90, 2, 4, 3, 5, 6)
# print(save_bill(one))