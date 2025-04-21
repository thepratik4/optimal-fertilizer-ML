from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)

# Enable CORS for all routes under /api/*
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Configure Gemini API key (replace this with your valid key)
genai.configure(api_key='AIzaSyBq38mGmYecTIE90RakaDBj6sFZeg1W-MY')

# Load Gemini Model (Gemini 2.0 Flash)
model = genai.GenerativeModel('gemini-2.0-flash')

# Prompt generator function
def create_prompt(query):
    context = '''
You are FertiliBot, the smart farming assistant for the Optimal Fertilizer Recommendation System.

In addition to your core capabilities:
- Personalized Fertilizer Recommendations
- Soil Health Analysis
- Crop-Specific Guidance
- Water Management Tips
- Sustainable Agricultural Practices

You also assist with:
1. Government schemes (e.g., PMKSY, NBS, Soil Health Card, PM-KISAN)
2. Current fertilizer prices/subsidies
3. State-specific agricultural programs

When responding to such queries:
- Acknowledge that pricing/scheme details may vary
- Mention the need to verify with official sources
- Provide official portals (agricoop.gov.in, soilhealth.dac.gov.in)
- Suggest contacting local Krishi Vigyan Kendras (KVKs)
- Include last verified year (e.g., "As of 2023 guidelines...")
- For prices, mention MSP components and seasonal variations

Your responses must be:
- Clear and actionable
- Geographically adaptive (if location clues exist)
- Cautious about time-sensitive data
- Source-aware (differentiate between policy and agronomy)

Example response format:
"The [Scheme Name] provides [benefits]. Current subsidies typically cover [% range]. For exact rates in [State], please check [Portal] or contact [Authority]. Always verify with official sources."

Maintain focus on soil health and sustainable practices in all responses.

User Query: '''
    return f"{context}{query}"

# GET endpoint: /api/chat_get?message=...
@app.route('/api/chat_get', methods=['GET'])
def chat_get():
    message = request.args.get('message', '')
    if not message:
        return jsonify({'response': 'Message is required.', 'status': 'error'}), 400
    try:
        prompt = create_prompt(message)
        response = model.generate_content(prompt, generation_config={"max_output_tokens": 200})
        return jsonify({
            'response': response.text.strip(),
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'response': 'Sorry, encountered an error. Please try again.',
            'status': 'error',
            'error': str(e)
        }), 500

# POST endpoint: /api/chat_post with JSON payload { "message": "..." }
@app.route('/api/chat_post', methods=['POST'])
def chat_post():
    data = request.get_json()
    message = data.get('message', '')
    if not message:
        return jsonify({'response': 'Message is required in JSON.', 'status': 'error'}), 400
    try:
        prompt = create_prompt(message)
        response = model.generate_content(prompt, generation_config={"max_output_tokens": 200})
        return jsonify({
            'response': response.text.strip(),
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'response': 'Sorry, encountered an error. Please try again.',
            'status': 'error',
            'error': str(e)
        }), 500

# Main entry point
if __name__ == '__main__':
    app.run(debug=True, port=5000)
