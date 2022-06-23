# ChallengeAIlabAeroespacial :rocket:

## Installation :wrench:

### Server :satellite:
```
pip install virtualenv
python -m venv venv
venv\Scripts\activate		# For Windows
source ./venv/bin/activate	# For Linux
pip install -r dependencies.txt
```

### Frontend :city_sunrise:
```
cd frontend
npm install
npm run build
```

## Run :fireworks:
```
venv\Scripts\activate		# For Windows
source ./venv/bin/activate	# For Linux
flask run
```

### Warning :warning:
If you are deploying or testing this app on **Windows OS** you should check if your registry key `Content Type` in `HKEY_CLASSES_ROOT\.js` **is set to `text\javascript`**, otherwise the app won't work because normally Windows set this registry to `text\plain` and Flask doesn't serve correctly the javascript files to the browser.
![Registry](https://i.stack.imgur.com/l1Ikl.png)