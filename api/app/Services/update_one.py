from pymysql import DatabaseError

from app.Services import db_connection

def update_data(id, name, gender, origin, type, price, features, quantity, img, guide, old_id):
    conn = db_connection.ConnectionDB()
    status = '200'
    try:
        with conn.cursor() as cursor:
            sql = "UPDATE `cat` SET `id`=%s, `name`=%s, `gender`=%s, `origin`=%s, `type`=%s, " \
                  "`price`=%s, `features`=%s, `quantity`=%s, `img`=%s, `guide`=%s WHERE `id`=%s;"
            cursor.execute(sql, (id, name, gender, origin, type, price, features, quantity,
                                 img, guide, old_id))
        conn.commit()
    except DatabaseError as e:
        status = 'failed'
    finally:
        conn.close()
        return status


# update_data("33", "fff", "1", "df", "rrt", "12", "fgf", "4", "dffgfg", "sdgg", "33")