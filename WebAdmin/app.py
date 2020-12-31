from flask import render_template, request, session, redirect, url_for
# from flask_session import Session
# from Controller import routerUser
import secrets
from app import app

secret = secrets.token_urlsafe(32)

# app = Flask(__name__)
app.secret_key = secret

# app.add_url_rule('/login/user/', view_func=routerUser.loginuser, methods=['POST'])
# app.add_url_rule('/insert/user/', methods=['POST'], view_func=routerUser.insertuser)

@app.route("/")
def welcome():
    return render_template('welcome.html')

if __name__ == '__main__':
    app.run(host='127.0.0.2', port=5000, debug=True)
