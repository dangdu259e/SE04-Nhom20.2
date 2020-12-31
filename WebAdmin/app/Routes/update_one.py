import requests
from flask import render_template, redirect, url_for, session, request

from app import app
from ..Entity import Cat

URL = 'http://127.0.0.1:5000/'


@app.route("/go_update", methods=['GET'])
def go_update():
    id = request.args.get('id')
    name = request.args.get('name')
    gender = request.args.get('gender')
    origin = request.args.get('origin')
    type = request.args.get('type')
    price = request.args.get('price')
    features = request.args.get('features')
    quantity = request.args.get('quantity')
    img = request.args.get('img')
    guide = request.args.get('guide')
    cat = Cat.Cat(id, name, gender, origin, type, price, features, quantity, img, guide)
    session['old_id'] = id
    return render_template('update.html', cat=cat)


@app.route('/get-update', methods=['POST'])
def get_update():
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
        'old_id': session.get('old_id')
    }
    url = URL + '/update-cat'
    response = requests.post(url, data=cat)
    status = response.text
    print(status)
    if status == '200':
        return redirect(url_for('allCat'))
    else:
        return render_template('error.html')
