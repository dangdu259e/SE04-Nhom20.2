from app import app
from flask import request, jsonify, session, url_for, redirect, render_template
import requests

url = 'http://127.0.0.1:5000/'


@app.route('/getallacount/admin', methods=['GET'])
def getallacountadmin():
    # check = session.get('statuslogin')
    # if (check == 'Success'):
    #     urlsend = url + 'api/get_all_admin'
    #     response = requests.get(urlsend)
    #     responseData = response.json()
    #     lendata = len(responseData)
    #     # return render_template('all_account.html', lendata=lendata, data=responseData)
    #     print(responseData)
    #     return "oke rooi nhe!"
    # else:
    #     print("session here: ", session.get('statuslogin'))
    #     return redirect(url_for('welcome'))
    urlsend = url + 'api/get_all_admin'
    response = requests.get(urlsend)
    responseData = response.json()
    lendata = len(responseData)
    listdata = []
    for i in range(0, lendata):
        temp = responseData.get(str(i))
        listdata.append(temp)
    return render_template('all_account.html', lendata=lendata, data=listdata)
    # print(responseData)
    # return "oke rooi nhe!"
