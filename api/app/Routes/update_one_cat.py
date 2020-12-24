from flask import request
from app import app
from app.Services import update_one


@app.route('/update-cat', methods=['POST'])
def update():
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
    old_id = request.form.get('old_id')
    status = update_one.update_data(id, name, gender, origin, type, price, features,
                                    quantity, img, guide, old_id)
    return status