#!/usr/bin/python
import sys
import logging

#activate_this = '/var/www/blep/venv/bin/activate'
#with open(activate_this) as file_:
#    exec(file_.read(), dict(__file__=activate_this))

logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/blep/")

from app import app as application
