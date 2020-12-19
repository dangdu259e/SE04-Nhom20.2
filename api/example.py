from flask import Flask, jsonify
from Services import Connection

import pymysql.cursors


# Hàm trả về một connection.
def ConnectionDB():
    # Bạn có thể thay đổi các thông số kết nối.
    connection = pymysql.connect(host='localhost',
                                 user='root',
                                 password='admin123',
                                 db='mydb',
                                 charset='utf8mb4',
                                 cursorclass=pymysql.cursors.DictCursor)
    return connection


app = Flask(__name__)


@app.route('/getall')
def getall():
    connection = Connection.ConnectionDB()
    try:
        with connection.cursor() as cursor:
            # Read a single record
            # cursor.execute('SELECT * FROM accounts WHERE username = %s AND password = %s', (username, password,))
            sql = "SELECT * FROM `admin`"
            cursor.execute(sql)
            data = cursor.fetchall()
            return jsonify(data)
            # if (len(data) > 0):
            #     return jsonify(data)
            #     # return url_for('/get/homepage', methods=['GET'])
            # else:
            #     return ''
            connection.commit()
            connection.close()
    # Close connect
    finally:
        connection.close()