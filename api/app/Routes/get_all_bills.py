from flask import jsonify
from app import app
from app.Services import get_all


@app.route('/get_all_bills', methods=['GET'])
def get_all_bills():
    all = get_all.get_all_bill()
    print("all",all)
    return jsonify(all)

