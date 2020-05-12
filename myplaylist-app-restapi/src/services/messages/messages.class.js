/* eslint-disable no-unused-vars */
exports.Messages = class Messages {
  constructor (options) {
    this.options = options || {};
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

};
