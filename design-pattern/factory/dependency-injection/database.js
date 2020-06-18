function createDatabaseConnection() {
  function start() {
    console.log('> [DATABASE] Starting...');
    console.log('> [DATABASE] Connection to postgres...');
    console.log('> [DATABASE] Running migrations...');
    console.log('> [DATABASE] Starting done!');

    throw new Error('Connection failed.')
  }

  function stop() {
    console.log('> [DATABASE] Stopping...');
    console.log('> [DATABASE] Closgin postgres connection...');
    console.log('> [DATABASE] Stopping done!');
  }

  return {
    start,
    stop
  }
}

module.exports = createDatabaseConnection;