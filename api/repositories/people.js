'use strict';

const AbstractRepository = require('./abstract');
const FileStorage = require('../storage/file');

class PeopleRepository extends AbstractRepository {
  constructor(storage) {
    super(storage);
  }

  async find(filters) {
    return await this.storage.find(filters);
  }
}

const factory = storage => new PeopleRepository(storage);

module.exports = {
  factory,
  repository: factory(new FileStorage()),
};
