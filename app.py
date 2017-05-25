from flask import Flask
from flask import render_template
app = Flask(__name__)
app.debug = True

# http://flask.pocoo.org
# az index fugveny rendeleli le az index.html file-t


@app.route("/")
def index():
    user = "skylite"
    # a user változó, az az index.html file-ban is user változóként lesz elérhető
    return render_template('index.html', user=user)


# a flask minden template file-t a templates mappán belül keres.
@app.route("/login")
def loginPage():
    return render_template('login.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0')
