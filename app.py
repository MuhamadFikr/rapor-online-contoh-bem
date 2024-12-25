
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return "Backend Server for Portal Rapot BEM Fahutan 2025"

@app.route('/login', methods=['POST'])
def login():
    # Placeholder login logic
    username = request.form.get('username')
    password = request.form.get('password')
    if username == "admin" and password == "admin":
        return redirect("/admin")
    return "Invalid credentials", 401

@app.route('/admin')
def admin_dashboard():
    return "Admin Dashboard Placeholder"

if __name__ == "__main__":
    app.run(debug=True)
