from app import app
from flask import request, jsonify
from ..Services import ServiceAdmin


@app.route('/api/login/admin/', methods=['POST'])
def loginadmin():
    # email = request.args.get('email', None)
    # # print(request)
    # # print(email)
    # password = request.args.get('password', None)
    email = request.form.get('email')
    password = request.form.get('password')
    result = ServiceAdmin.check_Login(email, password)
    if (result.get('Status') == 'Success'):
        print(result)
        return jsonify(result), 200
    else:
        print(result)
        return jsonify(result), 404


@app.route('/api/insert/admin/', methods=['POST'])
def insertadmin():
    # email = request.args.get('email', None)
    # password = request.args.get('password', None)
    email = request.form.get('email')
    password = request.form.get('password')
    result = ServiceAdmin.insert_admin(email, password)
    if (result.get('Status') == 'Success'):
        print(result)
        return jsonify(result), 200
    else:
        print(result)
        return jsonify(result), 404


@app.route('/api/get_all_admin', methods=['GET'])
def getalladmin():
    dic = {}
    list = ServiceAdmin.get_all_admin()
    for i in range(0, len(list)):
        list[i]['id'] = str(list[i].get('id'))
        temp = {i: list[i]}
        dic.update(temp)
    return dic
