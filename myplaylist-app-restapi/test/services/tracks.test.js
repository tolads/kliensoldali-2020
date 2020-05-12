const app = require('../../src/app');

describe('\'tracks\' service', () => {
  it('registered the service', () => {
    const service = app.service('tracks');
    expect(service).toBeTruthy();
  });
});
