'use strict';
/* global log */

const path = require('path');
const Datastore = require('nedb');

class FileStorage {
  setup() {
    if (this.db) return Promise.resolve();

    log.info('File path ' + path.join(process.cwd(), 'db.json'));

    return new Promise((resolve, reject) => {
      this.db = new Datastore({
        filename: path.join(process.cwd(), 'db.json'),
        autoload: true,
        onload: err => (err ? reject(err) : resolve()),
      });
    });
  }

  /*
   * Find records
   */
  async find(filters = {}) {
    await this.setup();

    log.info('Filters ', filters);

    return new Promise((resolve, reject) => {
      this.db.find(filters, {}, (err, docs) => {
        log.info('Docs from file: ' + docs);
        err ? reject(err) : resolve({people: docs});
      });
    });
  }
}

module.exports = FileStorage;
