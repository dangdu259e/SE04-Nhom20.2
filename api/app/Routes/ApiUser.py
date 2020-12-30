from app import app
from flask import request, jsonify
from ..Services import ServiceUser
from ..Services import ServiceDeleteAccount

@app.route('/api/login/user/', methods=['POST'])
def loginuser():
    email = request.form.get('email')
    password = request.form.get('password')
    result = ServiceUser.check_Login(email, password)
    if(result.get('Status')=='Success'):
        return jsonify(result), 200
    else:
        return jsonify(result), 404

@app.route('/api/check/account/', methods=['POST'])
def checkaccount():
    email = request.form.get('email')
    phone = request.form.get('phone')
    result = ServiceUser.check_account(email, phone)
    if(result.get('Status')=='Success'):
        return jsonify(result), 200
    else:
        return jsonify(result), 404

@app.route('/api/create/user/', methods=['POST'])
def creatuser():
    email = request.form.get('email')
    password = request.form.get('password')
    name = request.form.get('name')
    phone = request.form.get('phone')
    result = ServiceUser.create_user(email, password, name, phone)
    print(result)
    print(type(result))
    if (result.get('Status') == 'Success'):
        return jsonify(result), 200
    else:
        return jsonify(result), 404



@app.route('/api/insert/user/', methods=['POST'])
def insertuser():
    email = request.form.get('email')
    password = request.form.get('password')
    result = ServiceUser.insert_user(email, password)
    if (result.get('Status') == 'Success'):
        return jsonify(result), 200
    else:
        return jsonify(result), 404

@app.route('/api/get_all_user', methods=['GET'])
def getalluser():
    dic = {}
    list = ServiceUser.get_all_user()
    for i in range(0, len(list)):
        list[i]['id'] = str(list[i].get('id'))
        temp = {i: list[i]}
        dic.update(temp)
    return dic

@app.route('/api/reset/password-account', methods=['POST'])
def resetpassworduser():
    id = request.form.get('id')
    password = request.form.get('password')
    result = ServiceUser.resetPassword(id,password)
    if (result == 'Success'):
        return jsonify(result), 200
    else:
        return jsonify(result), 404

@app.route('/api/delete_account_user', methods=['POST'])
def deleteaccountuser():
    id = request.form.get('id')
    email = request.form.get('email')
    password = request.form.get('password')
    name = request.form.get('name')
    add = request.form.get('add')
    phone = request.form.get('phone')
    result = ServiceDeleteAccount.delete_account(id, email, password, name, add, phone)
    if(result=='Success'):
        return jsonify(result), 200
    else:
        return jsonify(result), 404