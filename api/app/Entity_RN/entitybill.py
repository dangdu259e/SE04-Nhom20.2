class bill_enti:
    def __init__( self, name, phone, add, note, id_user, id_cat ):
        self.name = name
        self.phone = phone
        self.add = add
        self.id_user = id_user
        self.id_cat = id_cat
        self.note = note

    def isNone( self ):
        if self.name == '' and self.phone == '' and self.add == '':
            return True
        else:
            return False
