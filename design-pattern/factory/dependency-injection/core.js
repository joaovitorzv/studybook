const createDatabaseConnection = require('./database');
const createWebServer = require('./webserver');

function createCore(configurations = {}) {
  const database = configurations.database || createDatabaseConnection();
  const webserver = configurations.webserver || createWebServer();

  function start() {
    console.log('> [CORE] Starting...')
    database.start();
    webserver.start();
    console.log('> [CORE] Starting done, System running!');
  }

  function stop() {
    console.log('> [CORE] Stoping...');
    webserver.stop();
    database.stop();
    console.log('> [CORE] Stoping done!');
  }

  return { 
    start,
    stop
  }
}

module.exports = createCore;