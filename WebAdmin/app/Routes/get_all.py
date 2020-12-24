import requests
from flask import render_template

from app import app


@app.route("/allCat", methods=['GET'])
def allCat():
    url = 'http://127.0.0.1:5000/get_all'
    res = requests.get(url)
    data = res.json()
    return render_template('read.html', posts=data)
