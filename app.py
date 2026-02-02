from flask import Flask, jsonify, send_from_directory

app = Flask(__name__, static_url_path='/assets', static_folder='assets')

# Home page
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

# Profile fetch route
@app.route('/profile_fetch')
def profile_fetch():
    user = {
        "status": 1,
        "profile": {
            "Name": "Aditya",
            "profile_image": "aditya.jpg"
        }
    }
    return jsonify(user)

# Serve uploaded images
@app.route('/uploads/<path:filename>')
def uploaded_file(filename):
    return send_from_directory('uploads', filename)

if __name__ == '__main__':
    app.run(debug=True)
    