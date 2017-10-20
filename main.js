//import
const electron = require('electron');
const app = electron.app;
const htmlWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

//initialisation de la fenetre principale
let mainWindow;

function createMainWindow()
{
	//on instancie notre fenêtre avec ces dimentinos
	mainWindow = new htmlWindow({width: 1000, 
								height: 1000,
							    title: 'Demo'}); 

	//On charge la page html de rendu
	mainWindow.loadURL(`file://${__dirname}/html/mainRender.html`); // on doit charger un chemin absolu

	//on defini l'action de fermeture
	mainWindow.on('closed', () => {mainWindow = null;});
}

//Quand l'application est prete on ouvre la fenêtre
app.on('ready', createMainWindow);

//quand toutes fenêtre sont fermés, tous les processus en arrière plan sont stoppés(possibilité de changer le comportement en fonction de la plateforme)
app.on('window-all-closed', () => {app.quit(); });


//Ecoute des message de changement de pages
ipcMain.on('log-change', (event, arg) => {
	console.log(arg);
    //chargement nouvelle fenêtre
    mainWindow.loadURL(`file://${__dirname}/html/`+arg); 
});
