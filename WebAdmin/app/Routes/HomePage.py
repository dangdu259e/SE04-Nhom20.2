from app import app
from flask import request, render_template, session
import requests
url = 'http://127.0.0.1:5000/'

@app.route('/homepage', methods=['GET'])
def homepage():
    statusLogin = session.get('statuslogin')
    if(statusLogin=='Success'):
        return render_template('home.html')
    else:
        return render_template('error.html')