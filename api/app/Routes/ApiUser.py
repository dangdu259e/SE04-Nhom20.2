from app import app
from flask import request, jsonify
from ..Services import ServiceUser
from ..Services import ServiceDeleteAccount
@app.route('/api/login/user/', methods=['POST'])
def loginuser():
    # email = request.args.get('email', None)
    # # print(request)
    # # print(email)
    # password = request.args.get('password', None)
    email = request.form.get('email')
    password = request.form.get('password')
    result = ServiceUser.check_Login(email, password)
    if(result.get('Status')=='Success'):
        print(result)
        return jsonify(result), 200
    else:
        print(result)
        return jsonify(result), 404

@app.route('/api/insert/user/', methods=['POST'])
def insertuser():
    # email = request.args.get('email', None)
    # password = request.args.get('password', None)
    email = request.form.get('email')
    password = request.form.get('password')
    result = ServiceUser.insert_user(email, password)
    if (result.get('Status') == 'Success'):
        print(result)
        return jsonify(result), 200
    else:
        print(result)
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
        return 'Success', 200
    else:
        return 'Invalid', 404