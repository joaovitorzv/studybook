function createWebServer() {
  function start() {
    console.log('> [WEBSERVER] Starting...');
    console.log('> [WEBSERVER] Waiting for port to be available...');
    console.log('> [WEBSERVER] Starting done!');
  }

  function stop() {
    console.log('> [WEBSERVER] Stopping...');
    console.log('> [WEBSERVER] Gracefully waiting for all clients...');
    console.log('> [WEBSERVER] Closing all ports...');
    console.log('> [WEBSERVER] Stopping done!');
  }

  return {
    start,
    stop
  }
}

module.exports = createWebServer;