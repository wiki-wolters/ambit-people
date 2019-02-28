'use strict';

class AbstractRepository {
  constructor(storage) {
    this.storage = storage;
  }

  async find(filters) {
    throw new Error('find method must be implemented on child class');
  }
}

module.exports = AbstractRepository;
