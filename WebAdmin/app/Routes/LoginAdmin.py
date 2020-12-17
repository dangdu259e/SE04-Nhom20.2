from app import app
from flask import request, jsonify, render_template
import requests

url = 'http://127.0.0.1:5000/'

@app.route('/login/admin/', methods=['POST'])
def loginuser():
    email = request.form.get('exampleInputEmail1')
    password = request.form.get('exampleInputPassword1')
    urlsend = url + 'api/login/admin/'
    datas = {'email': email,
            'password': password}
    response = requests.post('http://127.0.0.1:5000/api/login/admin/', data=datas)
    responseData = response.json()
    a= str(responseData.get('Status'))
    if (a == "Success"):
        return render_template('home.html')
    else:
        return render_template('error.html')

# @app.route('/api/insert/user/', methods=['POST'])
# def insertuser():
#     # email = request.args.get('email', None)
#     # password = request.args.get('password', None)
#     email = request.form.get('email')
#     password = request.form.get('password')
#     result = ServiceUser.insert_user(email, password)
#     if (result.get('Status') == 'Success'):
#         print(result)
#         return jsonify(result), 200
#     else:
#         print(result)
#         return jsonify(result), 404
#
#
# @app.route('/api/get_all_user', methods=['GET'])
# def getalluser():
#     dic = {}
#     list = ServiceUser.get_all_user()
#     for i in range(0, len(list)):
#         temp = {i: list[i]}
#         dic.update(temp)
#     return dic
