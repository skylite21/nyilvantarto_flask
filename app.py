from flask import Flask
from flask import render_template
from flask_login import LoginManager
from flask_login import login_required


app = Flask(__name__)
app.debug = True

login_manager = LoginManager()
login_manager.session_protection = "strong"
login_manager.init_app(app)

# http://flask.pocoo.org
# az index fugveny rendeleli le az index.html file-t

class User:
    def __init__(self, username):
        self.username = username
        self.loggedIn = False

user1 = User("skylite")
print(user1.username)

@app.route("/")
def index():
    # a flask minden template file-t a templates mappán belül keres.
    return render_template('login.html')


@app.route("/nyilvantarto")
@login_required
def loginPage():
    user = "skylite"
    # a user változó, az az index.html file-ban is user változóként lesz elérhető
    return render_template('index.html', user=user)

@app.route('/login', methods=['GET', 'POST'])
def login():
    user = request.form.get('email')
    user = User()
    return flask.render_template('login.html', form=form)


if __name__ == "__main__":
    app.run(host='0.0.0.0')
