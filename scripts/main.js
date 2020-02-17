const path = require('path');
const url = require('url');
const{app, BrowserWindow} = require('electron');

let win;
let connWin;

// function createConnWindow(){
//   connWin = new BrowserWindow({
//     width: 500,
//     height: 500,
//     icon: __dirname + "../img/krasnikov_tube.png",
//     parent: win
//   });
//
//   connWin.loadURL(url.format({
//     pathname: path.join(__dirname, '../connectionMenu.html'),
//     protocol: 'file',
//     slashes:true
//   }));
//
//   connWin.on('click', ()=>{
//     connWin = null;
//   });
// }

function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: __dirname + "../img/krasnikov_tube.png"
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file',
    slashes:true
  }));

  //hide electron win menu
  //win.setMenu(null);

  //open devTools
  win.webContents.openDevTools();

  //create connecton menu
  // win.on('add-conn-window', createConnWindow);

  win.on('add-conn-window', () => {
    // if addTodoWin does not already exist
    if (!connWin) {
      // create a new add todo window
      connWin = new BrowserWindow({
        file: path.join('renderer', '../connectionMenu.html'),
        width: 400,
        height: 400,
        // close with the main window
        parent: win
      })

      // cleanup
      connWin.on('closed', () => {
        connWin = null
      })
    }
  })

  win.on('closed', ()=>{
    win = null;
  });
}

app.on('ready', createWindow);

//exit on close
app.on('window-all-closed', ()=>{
  app.quit();
});
