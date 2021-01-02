from flask import request, jsonify
import secrets

from app.Entity import Customer
from app.Services import Connection, ServiceUser

secret = secrets.token_urlsafe(32)
conn = Connection.ConnectionDB()

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

def insertuser():
    # email = request.args.get('email', None)
    # password = request.args.get('password', None)
    email = request.form.get('email')
    password = request.form.get('password')
    result = Customer.insert_user(email, password)
    return result, 201
