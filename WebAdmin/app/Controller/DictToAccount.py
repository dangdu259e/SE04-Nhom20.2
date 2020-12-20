from ..Entity import Account
def dictoListAccount(dictionar):
    listacc = []
    for i in range(0, len(dictionar)):
        dic = dictionar.get(str(i))
        id = dic.get('id')
        username = dic.get('username')
        password = dic.get('password')
        name = dic.get('name')
        phone = dic.get('phone')
        add = dic.get('add')
        acc = Account.Account(id, username, password, name, phone, add)
        listacc.append(acc)
    return listacc