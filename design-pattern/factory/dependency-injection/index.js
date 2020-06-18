const createCore = require('./core.js')

const core = createCore();

try {
  core.start();
  core.stop();
} catch (err) {
  console.log('[INDEX] Uncaught error!');
  console.log(err);
}