from flask import request

from ..Services import save_bill
from ..Entity_RN import entitybill
from app import app


@app.route('/bill', methods=['POST'])
def save():
    # conn = db_connection.ConnectionDB()
    # # json = request.get_json()
    # json = request.get_data()
    # id = json.get('id')
    # name = json.get('name')
    # phone = json.get('phone')
    # add = json.get('add')
    # note = json.get('note')

    name = request.form.get('name')
    phone = request.form.get('phone')
    add = request.form.get('add')
    note = request.form.get('note')
    id_user = request.form.get('id_user')
    id_cat = request.form.get('id_cat')
    one = entitybill.bill_enti(name, phone, add, note, id_user, id_cat)
    if one.isNone():
        return {'status': 'not full'}
    else:
        stt = save_bill.save_bill(one)
        print(id_cat)
        return {'status': stt}



