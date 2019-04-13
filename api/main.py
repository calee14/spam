from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route('/'):
def index():
	return jsonify("Hello World")
	
@app.route('/api/v1.0/<message>')
def api(message):
	return message