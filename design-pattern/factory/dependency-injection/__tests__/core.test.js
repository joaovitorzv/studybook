const createCore = require('../core');

function createMock() {
  function start() {
    console.log('[MOCK] ...');
  }
  
  function stop() {
    console.log('[MOCK] ...');
  }

  return {
    start,
    stop
  }
}

describe('When core is imported', () => {
  test('should have #start and #stop method', () => {
    const core = createCore();  
    expect(core).toHaveProperty('start');
    expect(core).toHaveProperty('stop');
  });
});

describe('When core initialized', () => {
  test('should not return errors', () => {
    const databaseMock = createMock();
    const webserverMock = createMock();

    const core = createCore({
      database: databaseMock,
      webserver: webserverMock
    });
    
    expect(() => {
      core.start();
    }).not.toThrow();
  })
})