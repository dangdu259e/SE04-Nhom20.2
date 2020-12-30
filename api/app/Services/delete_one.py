from pymysql import DatabaseError

from app.Services import db_connection

def del_one(id):
    conn = db_connection.ConnectionDB()
    status = '200'
    try:
        with conn.cursor() as cursor:
            sql = "DELETE FROM `cat` WHERE  `id`={}".format(id)
            cursor.execute(sql)
        conn.commit()
    except DatabaseError as e:
        status = 'failed'
    finally:
        conn.close()
        return status
