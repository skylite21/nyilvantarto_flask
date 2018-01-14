from flask import Flask
from flask import request, redirect, url_for
from flask import render_template

app = Flask(__name__)
app.debug = True

# http://flask.pocoo.org
# az index fugveny rendeleli le az index.html file-t
# a / oldalon get és post method-okat is engedünk
# https://www.w3schools.com/tags/ref_httpmethods.asp
# EZ NEM EGY IGAZI BEJELENTKEZŐ FELÜLET, így nem szabad csinálni
# rendes belejentkezést
##### test branch
##### test branch2
## test33


validuser = "skylite"

@app.route("/", methods=['GET', 'POST'])
def index():
    # egy error változót deklarálunk aminek a kezdő értéken None (azaz semmi)
    error = None
    # ha ez a page ugy van meghivva hogy a kliens POST-ot kuld
    if request.method == 'POST':
        # a login.html-ben lévő form adatokat, kiszedjük a POST-bol
        # és betöltjük két darab változóba.
        email = request.form.get('email')
        passwd = request.form.get('password')
        print("A megadott emailcim: {}".format(email))
        print("A megadott jelszo: {}".format(passwd))
        # a beküldött adatok közül ellenőrizzük a felhasználónevet,
        # és ha az helyes
        if email == validuser:
            # átirányítjuk a felhasználót a belső oldalra
            return redirect(url_for('nyilvantarto'))
        else:
            # ha rossz adatokat adott meg, akkor egy hibaüzenetet küldünk..
            error = 'Invalid Credentials. Please try again.'
    # a flask minden template file-t a templates mappán belül keres.
    # ha nem POST a http kérés, hanem GET, akkor simán csak a
    # login.html-t rendereljük:
    return render_template('login.html', error=error)


@app.route("/nyilvantarto")
def nyilvantarto():
    user = validuser
    # a user változó, az az index.html file-ban is user változóként
    # lesz elérhető
    return render_template('index.html', user=user)

if __name__ == "__main__":
    app.run(host='0.0.0.0')
