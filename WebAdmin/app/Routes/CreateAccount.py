from app import app
from flask import request, render_template, session, redirect, url_for, jsonify
import requests
from ..Entity import Account

url = 'http://127.0.0.1:5000/'


@app.route('/createUserAccount', methods=['GET'])
def create_account():
    statuslogin = session.get('statuslogin')
    if(statuslogin == "Success"):
        return render_template('createAccountUser.html')
    else:
        return render_template('error.html')

@app.route('/save_create_account', methods=['POST'])
def save_create_account():
    statuslogin = session.get('statuslogin')
    if(statuslogin == "Success"):
        id_user = session.get('iduser')
        session.pop('iduser')
        new_email = request.form['newemail']
        new_password = request.form['newpassword']
        new_name = request.form['newname']
        new_add = request.form['newadd']
        new_phone = request.form['newphone']
        acc = Account.Account(id_user, new_email, new_password, new_name, new_add, new_phone)
        urlsend = url + 'api/create/user'
        datas = {
            'id': acc.getId(),
            'email': acc.getUsername(),
            'password': acc.getPassword(),
            'name': acc.getName(),
            'add': acc.getAdd(),
            'phone': acc.getPhone(),
        }
        response = requests.post(urlsend, data=datas)
        responseData = response.json()

        print(responseData)
        if (responseData.get('Message') == "Account successfully created"):
            return redirect(url_for('getallaccount'))
        else:
            return 'error'
    else:
        return render_template('error.html')
