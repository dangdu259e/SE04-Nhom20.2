from app.Services import db_connection

def get_all():
    conn = db_connection.ConnectionDB()
    try:
        with conn.cursor() as cursor:
            sql = "SELECT * FROM `cat`"
            cursor.execute(sql)
            data = cursor.fetchall()
        conn.commit()
    finally:
        conn.close()
        return data

def get_all_bill():
    conn = db_connection.ConnectionDB()
    try:
        with conn.cursor() as cursor:
            sql = "SELECT * FROM `bill`"
            cursor.execute(sql)
            data = cursor.fetchall()
        conn.commit()
    finally:
        conn.close()
        return data