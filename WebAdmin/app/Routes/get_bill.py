import requests
from flask import render_template

from app import app


@app.route("/bill", methods=['GET'])
def bill():
    url = 'http://127.0.0.1:5000/get_all_bills'
    res = requests.get(url)
    data = res.json()
    return render_template('all_bills.html', data=data)
    return data
