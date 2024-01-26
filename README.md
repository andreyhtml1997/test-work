# Starter Gulp Build with Custom WordPress Theme Template 

# Gulp

## 1. Let's choose version of Node
If you don't know what Node Version Manager (NVM) is, you can look at this <a href="https://github.com/nvm-sh/nvm/blob/master/README.md">article</a> or just dowload it here <a href="https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip">nvm-setup.zip</a>.
    
* 1.1 Check what version currently is in use :hammer:
```
node --version
```
* 1.2 Find out which versions of Node.js you may have installed and which one of those you're currently using: :hammer:
```
nvm ls
```
* 1.3 Assuming you would pick Node.js v16.14.0 for installation you'd type the following to install that version: :hammer:
```
nvm install 16.14.0
```
* 1.4 You are then free to choose between installed versions of Node.js. So if you would need to use an older version like v12.22.10 you would set it as the active version like this: :hammer:
```
nvm use 12.22.10
```

## 2. Let's check and update NPM (Node Package Manager) :star:
* 2.1 Check your current version:
```
npm -v
```
* 2.2 Update Node Package Manager to the latest version:
```
npm update -g
```
* 2.3 If at some point you need to use older version you can install the version you need, for example v4.6.1
```
npm install -g npm@4.6.1
```
