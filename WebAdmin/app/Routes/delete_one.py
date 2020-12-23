import requests
from flask import render_template, request, redirect, url_for
from app_thuna import app


@app.route("/go-delete", methods=['GET'])
def delete():
    id = request.args.get('id')
    data = {'id': id}
    url = 'http://127.0.0.1:5000/delete-cat'
    response = requests.post(url, data=data)
    status = response.text
    if status == '200':
        return redirect(url_for('all'))
    else:
        return render_template('error.html')


@app.route('/delete', methods=['POST'])
def go_delete():
    # id = request.args.get('id')
    id = request.form.get('id')
    data = {'id': id}
    url = 'http://127.0.0.1:5000/delete-cat'
    response = requests.post(url, data=data)
    status = response.text
    if status == '200':
        return redirect(url_for('all'))
    else:
        return render_template('error.html')