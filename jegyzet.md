

git beallitasa:
# git telepitese:
````
apt install git
````
# git alap beallitasa:
````
git config --global user.email "sajat@email.hu"
git config --global user.name "sajatUsernevem"
````
# git push config:
````
git config --global push.default matching
````
.gitignore file tartalmazza azokat a mappákat vagy filelokat amiket 
a git nem kell hogy figyelembe vegyen

# git használata
Első lépés hogy csinálunk egy üres repository-t, vagy clone-ozunk egy meglévőt... 
Új üres repo készítése:
````
git init
````
Meglévő klónozása:

````
git clone /path/to/repo
````
Munka után, a változásokat az alábbi paranccsal tudjuk megnézni:
````
git status
````

Először hozzáadjuk a commithoz azokat a fileokat amiket fel szeretnénk push-olni:
pl a gitignore file-t:

````
    git add .gitingore
````
pl ha az egész mappát hozzá akarjuk adni (minden file-t, ehhez benne kell lennünk 
abban a mappában amelyikben a git repository található ):
````
    git add .
````
Commit-oljuk azokat a fájlokat amelyeket hozzáadtuk az add paranccsal:
````
git commit -m "commit üzenetem"
````
A commitot push-olni kell, ekkor adódik hozzá a távoli repo-hoz
````
git push
````









