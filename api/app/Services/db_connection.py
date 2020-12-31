import pymysql.cursors
from ..configDB import *

# Hàm trả về một connection.
def ConnectionDB():

    connection = pymysql.connect(host=HOST,
                                 user=USER,
                                 password=PASSWORD,
                                 db=DB,
                                 charset=CHARSET,
                                 cursorclass=pymysql.cursors.DictCursor)
    return connection
