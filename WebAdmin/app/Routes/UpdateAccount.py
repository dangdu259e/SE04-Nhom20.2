from app import app
from flask import request, render_template, session, redirect, url_for
import requests
from ..Entity import Account

url = 'http://127.0.0.1:5000/'


@app.route('/updateAccount', methods=['GET'])
def updateaccount():
    statuslogin = session.get('statuslogin')
    if(statuslogin == "Success"):
        id = request.args.get('id')
        session['iduser']= id
        username = request.args.get('username')
        password = request.args.get('password')
        name = request.args.get('name')
        add = request.args.get('add')
        phone = request.args.get('phone')
        acc = Account.Account(id, username, password, name, add, phone)
        return render_template('update_account.html', account=acc)
    else:
        return render_template('error.html')
@app.route('/save_update_account', methods=['POST'])
def saveupdate():
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
        urlsend = url + 'api/update/account/'
        datas = {
            'id': acc.getId(),
            'email': acc.getUsername(),
            'password': acc.getPassword(),
            'name': acc.getName(),
            'add': acc.getAdd(),
            'phone': acc.getPhone(),
        }
        response = requests.post(urlsend, data=datas)

        responseData = response.text
        print(responseData)
        if (responseData == "Success"):
            return redirect(url_for('getallaccount'))
        else:
            return 'error'
    else:
        return render_template('error.html')
