from flask import request
from app import app

from app.Services import delete_one

@app.route('/delete-cat', methods=['POST'])
def delete():
    id = request.form.get('id')
    status = delete_one.del_one(id)
    return status
