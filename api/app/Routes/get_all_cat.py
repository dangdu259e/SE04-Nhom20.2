from flask import jsonify
from app import app
from app.Services import get_all

@app.route('/get_all', methods=['GET'])
def get():
    all = get_all.get_all()
    # print(all)
    return jsonify(all)


