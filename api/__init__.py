from flask import Flask
from flask import jsonify
from spam_service import spam_service

app = Flask(__name__)

@app.route('/')
def index():
	return jsonify("Hello World")

@app.route('/api/v1.0/<message>')
def api(message):
	serv = spam_service()
	result = serv.predict([message])
	return jsonify(result)
