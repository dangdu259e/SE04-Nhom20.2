from datetime import datetime

from pymysql import DatabaseError

from app.Services import db_connection


def find():
    conn = db_connection.ConnectionDB()
    try:
        with conn.cursor() as cursor:
            sql = "SELECT `id` FROM `bill` "
            cursor.execute(sql)
            kq = cursor.fetchall()
        conn.commit()
    except DatabaseError as e:
        status = 'failed'
        print(e)
    finally:
        conn.close()
        return kq[-1].get('id')


def save_payment(total_cost, id_cat):
    conn = db_connection.ConnectionDB()
    status = '200'
    try:
        purchase_date = str(datetime.now()).split('.')[0]

        print(purchase_date)
        id_bill = find()
        with conn.cursor() as cursor:
            # sql = "INSERT INTO `payment` (`id_bill`, `purchase_date`, `total_cost`) " \
            #       " VALUES (%s, %s, %s)"
            sql = "INSERT INTO `payment` (`id_bill`, `purchase_date`, `total_cost`) VALUES ({}, '{}', {})"\
                .format(id_bill, purchase_date, total_cost)
            cursor.execute(sql)
            sql_next = "UPDATE `cat` SET `quantity`=`quantity`-1 WHERE  `id`='{}'".format(id_cat)
            cursor.execute(sql_next)
        conn.commit()
    except DatabaseError as e:
        status = e
        print(e)
    finally:
        conn.close()
        return status, purchase_date, id_bill

