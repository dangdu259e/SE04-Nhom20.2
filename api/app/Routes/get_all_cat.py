from flask import jsonify
from app_thuna import app
from app_thuna.service import get_all


@app.route('/get_all', methods=['GET'])
def get():
    all = get_all.get_all()
    print(all)
    return jsonify(all)


