from app import app
from flask import request, jsonify, session, url_for, redirect, render_template
import requests
from ..Entity import Account
from ..Controller import DictToAccount
url = 'http://127.0.0.1:5000/'


@app.route('/getallacount', methods=['GET'])
def getallacountadmin():
    urlsend = url + 'api/get_all_admin'
    response = requests.get(urlsend)
    responseData = response.json()
    listdata = DictToAccount.dictoListAccount(responseData)
    lendata = len(responseData)
    return render_template('all_account.html', lendata=lendata, data=listdata)

