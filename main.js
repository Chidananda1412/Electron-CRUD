const { app, BrowserWindow, ipcMain } = require('electron');
const fs= require('fs');
const path = require('path');
let jsondata = require('./data.json');
const dataPath = path.join(__dirname, 'data.json');
let mainWindow;
function createWindow () {
    mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Important for accessing fs, etc.
      contextIsolation: false,
    }
  });

  mainWindow.loadFile('index.html');

  
  mainWindow.webContents.send('history-data', jsondata);
}

app.on('ready', createWindow);
let addWindow;
function creatAddWindow(){
        addWindow = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences: {
          nodeIntegration: true, // Important for accessing fs, etc.
          contextIsolation: false,
        }
      });
    
      addWindow.loadFile('addItem.html');
}


ipcMain.on('createwindow', () => {
    creatAddWindow();
})

ipcMain.on('user-data', (e, user ) =>{
    
    jsondata.push(user)
    fs.writeFileSync(dataPath, JSON.stringify(jsondata, null, 2), 'utf-8');
    console.log(user);
    console.log('Json data: ' ,jsondata);

    mainWindow.webContents.send('added-data', jsondata);


    addWindow.close();
})

let editWindow;

ipcMain.on('open-edit-window', (event, index) => {
    

    const user = jsondata[index];

    editWindow = new BrowserWindow({
        width: 400,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    editWindow.loadFile('edit-item.html');

    
        editWindow.webContents.send('edit-user-data',  index, user );
   
});


ipcMain.on('save-edited-user', (event,  index, updatedUser ) => {
    

    
        jsondata[index] = updatedUser;
        fs.writeFileSync(dataPath, JSON.stringify(jsondata, null, 2), 'utf-8');
        mainWindow.webContents.send('added-data', jsondata);
        editWindow.close();
    
});


ipcMain.on('delete-user', (event, indexToDelete) => {
    

    
        jsondata.splice(indexToDelete, 1);
        fs.writeFileSync(dataPath, JSON.stringify(jsondata, null, 2), 'utf-8');
        mainWindow.webContents.send('added-data', jsondata);
    
});

