from flask import Flask
import os
template_dir = os.path.abspath('../templates')
app = Flask(__name__, template_folder='./templates', static_folder='./static')

from app.Routes import *
