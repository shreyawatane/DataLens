from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json
from typing import Optional
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Flask App initialization
app = Flask(__name__)
CORS(app)

CORS(app, origins=["http://localhost:5173"])

# Environment variables
BASE_API_URL = os.getenv("BASE_API_URL")
LANGFLOW_ID = os.getenv("LANGFLOW_ID")
FLOW_ID = os.getenv("FLOW_ID")
APPLICATION_TOKEN = os.getenv("APPLICATION_TOKEN")

def run_flow(message: str, tweaks: Optional[dict] = None) -> dict:
    """
    Call the Langflow API with a given message.
    """
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{FLOW_ID}"

    payload = {
        "input_value": message,
        "output_type": "chat",
        "input_type": "chat",
    }
    if tweaks:
        payload["tweaks"] = tweaks

    headers = {"Authorization": f"Bearer {APPLICATION_TOKEN}", "Content-Type": "application/json"}
    response = requests.post(api_url, json=payload, headers=headers)

    if response.status_code == 200:
        return response.json()
    else:
        return {"error": response.text}

@app.route('/run-flow', methods=['POST'])
def run_flow_endpoint():
    """
    API endpoint for running the Langflow flow.
    """
    data = request.json
    if not data or 'message' not in data:
        return jsonify({"error": "Invalid request. 'message' field is required."}), 400

    message = data['message']
    tweaks = data.get('tweaks', None)
    result = run_flow(message, tweaks)
    return jsonify(result)

@app.route('/run-flow', methods=['OPTIONS'])
def options_handler():
    response = jsonify({'status': 'OK'})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    return response


# Run the Flask server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8501)
