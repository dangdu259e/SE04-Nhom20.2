class Account():
    def __init__(self, id, username, password , name , phone , add):
        self.id = id
        self.username = username
        self.password = password
        self.name = name
        self.phone = phone
        self.add = add

    def getId(self):
        return self.id
    def getUsername(self):
        return self.username
    def getPassword(self):
        return self.password
    def getName(self):
        return self.name
    def getPhone(self):
        return self.phone
    def getAdd(self):
        return self.add

    def setId(self, newid):
        self.id = newid
    def setUsername(self, newusername):
        self.username = newusername
    def setPassword(self, newpassword):
        self.password = newpassword
    def setName(self, newname):
        self.name = newname
    def setPhone(self, newphone):
        self.phone = newphone
    def setAdd(self, newadd):
        self.add = newadd