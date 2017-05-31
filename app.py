from flask import Flask
from flask import request, redirect, url_for
from flask import render_template

app = Flask(__name__)
app.debug = True

# http://flask.pocoo.org
# az index fugveny rendeleli le az index.html file-t

@app.route("/", methods=['GET', 'POST'] )
def index():
    error = None
    if request.method == 'POST':
        email = request.form.get('email')
        passwd = request.form.get('password')
        print(email)
        print(passwd)
        if email == "skylite":
            return redirect(url_for('nyilvantarto'))
        else:
            error = 'Invalid Credentials. Please try again.'
    # a flask minden template file-t a templates mappán belül keres.
    return render_template('login.html', error=error)

@app.route("/nyilvantarto")
def nyilvantarto():
    user = "skylite"
    # a user változó, az az index.html file-ban is user változóként lesz elérhető
    return render_template('index.html', user=user)

if __name__ == "__main__":
    app.run(host='0.0.0.0')
