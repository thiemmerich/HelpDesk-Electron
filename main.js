const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 1366,
    height: 768,
    // frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.setMenu(null)
  // e carregar o index.html do aplicativo.
  win.loadFile('pages/index.html')
  
}
app.on('ready', createWindow)