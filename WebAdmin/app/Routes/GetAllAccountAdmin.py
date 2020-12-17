from app import app
from flask import request, jsonify, render_template
import requests

url = 'http://127.0.0.1:5000/'
@app.route('/getallacount/admin/', methods=['POST'])
def getallacountadmin():
    urlsend = url + 'api/get_all_admin'
    response = requests.get(urlsend)
    responseData = response.json()
    print(len(responseData))
    return responseData
