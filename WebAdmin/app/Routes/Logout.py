from app import app
from flask import request, render_template, session, redirect, url_for
import requests
from ..Entity import Account

url = 'http://127.0.0.1:5000/'
@app.route('/LogoutAccount', methods=['GET'])
def logoutAccount():
    statuslogin = session.get('statuslogin')
    if(statuslogin == "Success"):
        session.pop('statuslogin', None)
        return redirect(url_for('welcome'))
    else:
        return render_template('error.html')
