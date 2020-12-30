import pymysql.cursors
from ..configDB import *

# Hàm trả về một connection.
def ConnectionDB():
    # connection = pymysql.connect(host='localhost',
    #                              user='root',
    #                              password='1234',
    #                              db='se04',
    #                              charset='utf8mb4',
    #                              cursorclass=pymysql.cursors.DictCursor)
    connection = pymysql.connect(host=HOST,
                                 user=USER,
                                 password=PASSWORD,
                                 db=DB,
                                 charset=CHARSET,
                                 cursorclass=pymysql.cursors.DictCursor)
    return connection
