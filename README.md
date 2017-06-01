# nyilvantarto_flask
school assignment, no guarantees:) under development

# Telepítés:
Python3 környezet:
````
sudo apt install python3; sudo apt install python3-pip
````
Virtualenv környezet:
````
sudo pip install virtualenv
````
nodejs, bower telepítése:

````
sudo apt-get remove --purge nodejs
sudo apt update; apt install curl
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt update; 
sudo apt install nodejs
npm install --global bower
````


# Használat
Clone-ozzuk ezt a repot:
````
git clone https://github.com/skylite21/nyilvantarto_flask.git
````
Készítsünk virtualenv-et:
````
virtualenv -p python3 ~/virtualenv/nyilvantarto_flask
````
Aktiváljuk a virtialenv-et:
````
source ~/virtualenv/nyilvantarto_flask/bin/activate
````
Telepítsük a python csomagokat:
````
pip install -r requirements.txt
````

A clone-ozott nyilvantarto_flask mappán belül telepítsük a bower csomagokat:
````
bower install
````

# Futtatás
A nyilvantarto_flask mappán belül futtassuk az appot:
````
python app.py
````



