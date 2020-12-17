from app import app
from flask import request, jsonify, render_template, session
import requests

url = 'http://127.0.0.1:5000/'

@app.route('/login/admin/', methods=['POST'])
def loginuser():
    session['statuslogin'] = 'Invalid'
    email = request.form.get('exampleInputEmail1')
    password = request.form.get('exampleInputPassword1')
    urlsend = url + 'api/login/admin/'
    datas = {'email': email,
            'password': password}
    response = requests.post('http://127.0.0.1:5000/api/login/admin/', data=datas)
    responseData = response.json()
    session['iduser'] = responseData.get('id')
    a= str(responseData.get('Status'))
    if (a == "Success"):
        session['statuslogin'] = 'Success'
        return render_template('home.html')
    else:
        return render_template('error.html')

