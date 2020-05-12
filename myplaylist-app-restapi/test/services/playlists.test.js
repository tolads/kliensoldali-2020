const app = require('../../src/app');

describe('\'playlists\' service', () => {
  it('registered the service', () => {
    const service = app.service('playlists');
    expect(service).toBeTruthy();
  });
});
