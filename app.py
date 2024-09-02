from flask import Flask, render_template

app = Flask(__name__, static_folder='static')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/work')
def work():
    return render_template('work.html')

if __name__ == '__main__':
    app.run(debug=True)
