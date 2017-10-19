# Installation
1. pré-requis : node.js et npm 
2. ```shell= 
  	npm install electron -g
  	```

# Démarer un projet

1. ```shell=
	npm install electron --save-dev (Ajoute la dépendance ELECTRON)
	```
	
# Lancer application 

```shell=
electron .
```

# Build projets

1. Installer electron-packager : npm install electron-packager -g --save-dev
2. Deux solutions:
	1. Pour toutes les plateformes possibles
		```shell =
		electron-packager . --prune=true  --all --out=builds-auto
		```
	2. Grace au champ script dans package.json: 
		```json = 
		"scripts": {
		    "package-mac": "electron-packager . --overwrite --platform=darwin --prune=true --arch=x64 --out=builds",
		    "package-win": "electron-packager .  --overwrite --asar --platform=win32 --arch=x64 --out=builds",    
		    "package-linux": "electron-packager .  --overwrite --asar --platform=linux --arch=x64 --out=builds"
		  },
		```
		```shell =
		npm run package-mac
		npm run package-win
		npm run package-linux
		```