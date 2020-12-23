import json
from flask import request
from app_thuna import app
from app_thuna.service import add_one
from app_thuna.entity import cat


@app.route('/add_one', methods=['POST'])
def add():
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
    newCat = cat.Cat(id, name, gender, origin, type, price, features, quantity, img, guide)
    status = add_one.add_data(newCat)
    # return json.dumps(newCat.__dict__)
    return status