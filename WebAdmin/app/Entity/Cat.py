class Cat:
    def __init__( self, id, name, gender, origin, type, price, features, quantity, img, guide):
        self.id = id
        self.name = name
        self.gender = gender
        self.origin = origin
        self.type = type
        self.price = price
        self.features = features
        self.quantity = quantity
        self.img = img
        self.guide = guide

    def getAll( self ):
        return self.id, self.name, self.gender, self.origin, self.type,\
               self.price, self.features, self.quantity, self.img, self.guide
