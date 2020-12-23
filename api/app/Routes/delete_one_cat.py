from flask import request
from app_thuna import app
from app_thuna.service import delete_one


@app.route('/delete-cat', methods=['POST'])
def delete():
    id = request.form.get('id')
    status = delete_one.del_one(id)
    return status
