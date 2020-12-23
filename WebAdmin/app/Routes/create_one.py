import requests
from flask import render_template, request, redirect, url_for
from app_thuna import app


@app.route('/go-create')
def create():
    return render_template('create.html')


@app.route('/get-create', methods=['POST'])
def created():
    id = request.form.get('id')
    name = request.form.get('name')
    gender = request.form.get('gender')
    origin = request.form.get('origin')
    type = request.form.get('type')
    price = request.form.get('price')
    features = request.form.get('features')
    quantity = request.form.get('quantity')
    img = request.form.get('img')
    guide = request.form.get('guide')
    cat = {
        'id': id,
        'name': name,
        'gender': gender,
        'origin': origin,
        'type': type,
        'price': price,
        'features': features,
        'quantity': quantity,
        'img': img,
        'guide': guide,
    }
    url = 'http://127.0.0.1:5000/add_one'
    response = requests.post(url, data=cat)
    stt = response.text
    if stt == '200':
        return redirect(url_for('all'))
    else:
        return render_template('error.html')