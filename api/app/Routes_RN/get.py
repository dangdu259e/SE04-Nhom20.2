from flask import jsonify, request

from ..Services import db_connection
from app import app


@app.route('/all-cats')
def get_alls():
    conn = db_connection.ConnectionDB()
    try:
        with conn.cursor() as cursor:
            sql = "SELECT * FROM `cat`"
            cursor.execute(sql)
            data = cursor.fetchall()
            print(type(data))
        conn.commit()
    finally:
        conn.close()
        return jsonify(data)


@app.route('/all-cat')
def get_all():
    conn = db_connection.ConnectionDB()

    soItem1Trang = 3
    page = int(request.args.get('trang'))
    froms = page * soItem1Trang

    with conn.cursor() as cursor:
        sql = "SELECT * FROM `cat`"
        cursor.execute(sql)
        data = cursor.fetchall()
    conn.commit()

    mangmoi = []
    for i in range(froms, froms+3):
        if i < len(data):
            mangmoi.append(data[i])
        else:
            break
    return jsonify(mangmoi)


