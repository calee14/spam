import json
from flask import Flask
from flask import jsonify, request
from app import spam_service

app = Flask(__name__)

@app.route('/')
def index():
	return jsonify("Hello World")

@app.route('/api/v1.0/<message>')
def api(message):
	serv = spam_service.spam_service()
	result = serv.predict([message])
	return jsonify(result[0])

@app.route('/api/v1.1/', methods = ['POST'])
def api_with_json_data():
	jsdata = request.form['javascript_data']
	text = json.loads(jsdata)[0]
	return jsonify(text)
