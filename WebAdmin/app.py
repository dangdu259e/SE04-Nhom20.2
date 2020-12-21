from flask import render_template, request, session, redirect, url_for
# from flask_session import Session
# from Controller import routerUser
import secrets
from app import app

secret = secrets.token_urlsafe(32)

# app = Flask(__name__)
app.secret_key = secret

# app.add_url_rule('/login/user/', view_func=routerUser.loginuser, methods=['POST'])
# app.add_url_rule('/insert/user/', methods=['POST'], view_func=routerUser.insertuser)

@app.route("/")
def welcome():
    return render_template('welcome.html')


@app.route('/homeee')
def control():
    return redirect(url_for('welcome', id='1', username= 'dangtrungdu', password= '1234'))


# @app.route('/save-post', methods=['POST', 'GET'])
# def signUp():
#     if request.method == 'POST':
#         id= 3
#         email = request.form['exampleInputEmail1']
#         password = request.form['exampleInputPassword1']
#         try:
#
#             with connection.cursor() as cursor:
#                 # Read a single record
#                 sql = "INSERT INTO khachhang (idkhachhang,username,password) VALUES (%s, %s, %s)"
#                 cursor.execute(sql, (id, email, password))
#                 connection.commit()
#         finally:
#             connection.close()
#             return "Saved successfully."
#     else:
#         return "error"
# @app.route('/save-post', methods=['POST', 'GET'])
# def signUp():
#     # connect DB MYSQL
#     connection = Connection.ConnectionDB()
#
#     # request form and get data in form
#     if request.method == 'POST':
#         email = request.form['exampleInputEmail1']
#         password = request.form['exampleInputPassword1']
#         # Query and check
#         try:
#             with connection.cursor() as cursor:
#                 # Read a single record
#                 # cursor.execute('SELECT * FROM accounts WHERE username = %s AND password = %s', (username, password,))
#                 sql = "SELECT * FROM admin WHERE username = %s AND password = %s"
#                 cursor.execute(sql, (email, password))
#                 data = cursor.fetchall()
#                 if (len(data) > 0):
#                     dict = data[0]
#                     a = dict.get('id')
#                     session['id'] = a
#                     return render_template('home.html')
#                     # return url_for('/get/homepage', methods=['GET'])
#                 else:
#                     return render_template('error.html')
#                 connection.commit()
#                 connection.close()
#         # Close connect
#         finally:
#             connection.close()
#     else:
#         return "error"


if __name__ == '__main__':
    app.run(host='127.0.0.2', port=5000)
