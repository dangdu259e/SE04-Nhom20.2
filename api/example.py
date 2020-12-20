from flask import Flask, jsonify
from Services import Connection


app = Flask(__name__)


@app.route('/getall')
def getall():
    connection = Connection.ConnectionDB()
    try:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM `admins`"
            cursor.execute(sql)
            data = cursor.fetchall()
            return jsonify(data)
            connection.commit()
            connection.close()
    # Close connect
    finally:
        connection.close()


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
