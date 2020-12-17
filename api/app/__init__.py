from flask import Flask
import os
template_path = os.path.abspath('./templates')
app = Flask(__name__)

from app.Routes import *
