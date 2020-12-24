import random

from pymysql import DatabaseError

from ..Services import db_connection


def add_data(one):
    conn = db_connection.ConnectionDB()
    status = '200'
    try:
        with conn.cursor() as cursor:
            sql = "INSERT INTO `cat` (`id`, `name`, `gender`, `origin`, `type`, `price`, `features`, `quantity`, `img`, `guide`)" \
                  " VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, (one.id, one.name, one.gender, one.origin, one.type, one.price, one.features, one.quantity, one.img, one.guide))
            # data = cursor.fetchall()
            # print(data)
        conn.commit()
    except DatabaseError as e:
        status = 'failed'
    finally:
        conn.close()
        return status


