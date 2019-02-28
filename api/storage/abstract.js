'use strict';

class AbstractStorage {
  async find(filters) {
    throw new Error('find method must be implemented on child class');
  }
}

module.exports = AbstractStorage;
