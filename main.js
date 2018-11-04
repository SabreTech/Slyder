const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let dock;
let pulldown;
// Listen for app to be ready
app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 600,
        height: 100,
        frame: false,
        alwaysOnTop: true,
        transparent:true,
        resizable: false
});

    //Load HTML into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'dock.html'),
        protocol:'file:',
        slashes: true
    }));

    //Load Slyder to center and top
    mainWindow.setPosition(0,0);
});

