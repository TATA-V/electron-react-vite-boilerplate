const { contextBridge, ipcRenderer } = require('electron');

contextBridge.executeInMainWorld('electron', {
  sendMessage: (channer, data) => {
    ipcRenderer.send(channer, data);
  },
  onMessage: (channer, callback) => {
    ipcRenderer.on(channer, (_, data) => callback(data));
  },
});