//protocole de conmmunication vers le main process
const ipcRender = require('electron').ipcRenderer;

//bouton
let newWindowBtn = document.getElementById('newWindow');

//Quand click bouton envoie message
newWindowBtn.addEventListener('click', function(event) {
  ipcRender.send('log-change', 'mainRender.html');
  
});