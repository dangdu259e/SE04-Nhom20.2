from flask import render_template, request, session
from app.Services import Connection, connectExample
import secrets
from app import app
secret = secrets.token_urlsafe(32)

# app = Flask(__name__)
app.secret_key = secret
# app.add_url_rule('/login/user/', view_func=routerUser.loginuser, methods=['POST'])
# app.add_url_rule('/insert/user/', methods=['POST'], view_func=routerUser.insertuser)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

# if __name__ == '__main__':
#     app.run(host='127.0.0.1', port=5000)