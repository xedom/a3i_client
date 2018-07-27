const serverUpdater = require('./src/serverBrowser.js').serverListUpdater;
const serverUpdateTime = require('./cfg/cfg').steam.serverListCFG.updateTime * (1000*60);

serverUpdater();
setInterval(serverUpdater, serverUpdateTime);

setTimeout(() => {
    const web = require('./src/app.js')();
}, 4000);