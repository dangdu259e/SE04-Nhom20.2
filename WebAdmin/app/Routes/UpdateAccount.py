from app import app
from flask import request, render_template, session
import requests
from ..Entity import Account

url = 'http://127.0.0.1:5000/'


@app.route(
    '/updateAccount/id= line.id, username = line.username, password = line.password, name = line.name, add = line.add, phone= line.phone',
    methods=['GET', 'POST'])
def updateaccount(id, username, password, name, add, phone):
    if (request.method == "GET"):
        acc = Account.Account(id, username, password, name, add, phone)
        return render_template('update_account.html', account=acc)
    else:
        newemail = request.form['email']
        newpassword = request.form['password']
        newname = request.form['name']
        newadd = request.form['add']
        newphone = request.form['phone']
        acc = Account.Account(id, newemail, newpassword, newname, newadd, newphone)
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
        if (response == "success"):
            return 'success'
        else:
            return 'invalid'
