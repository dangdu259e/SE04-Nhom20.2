from app import app
from flask import request, jsonify
from ..Services import ServiceUpdateAccount

@app.route('/api/update/account/', methods=['POST'])
def updateaccount():
    id = request.form.get('id')
    email = request.form.get('email')
    password = request.form.get('password')
    name = request.form.get('name')
    add = request.form.get('add')
    phone = request.form.get('phone')
    result = ServiceUpdateAccount.update_account(id, email, password, name, add, phone)
    if(result=='Success'):
        print(result)
        return 'Success', 200
    else:
        return 'Invalid', 404