from flask import render_template, request, session
import secrets
from app import app
secret = secrets.token_urlsafe(32)
app.secret_key = secret


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
    # app.run(host='0.0.0.0', port=5000)
    # app.run()
