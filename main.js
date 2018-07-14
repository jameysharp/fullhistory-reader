const {app, BrowserWindow} = require('electron')
  
function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(`file://${__dirname}/main.html`)
}

app.on('ready', createWindow)
