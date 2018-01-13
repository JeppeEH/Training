# Training

#Packages

#live-server
npm install -g live-server
Starter live server på folderen public

#yarn install
henter alle pakker i package.json

#yarn init
Creates the package.json file


#Babel
yarn global add babel-cli@6.24.1
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

Setup babel output file
babel src/app.js --out-file=public/scripts/app.js --presets=env,react
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


# Visual Studio Code extentions
Babel ES6/ES7
Path Intellisense
