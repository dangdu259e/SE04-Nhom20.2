import requests
from flask import render_template

from app_thuna import app


@app.route("/", methods=['GET'])
def all():
    url = 'http://127.0.0.1:5000/get_all'
    res = requests.get(url)
    data = res.json()
    return render_template('read.html', posts=data)
