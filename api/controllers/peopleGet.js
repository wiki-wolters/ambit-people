'use strict';

const { repository: repo } = require('../repositories/people');

const peopleGet = filters => {
  return repo.find(filters);
};

const middleware = async function(req, res) {
  // get filter params
  const filters = {};

  if (req.query.gender) {
    filters.gender = req.query.gender;
  }

  if (req.query['age.gte']) {
    filters.age = filters.age || {};
    filters.age.$gte = parseInt(req.query['age.gte'], 10);
  }

  if (req.query['age.lt']) {
    filters.age = filters.age || {};
    filters.age.$lt = parseInt(req.query['age.lt'], 10);
  }

  try {
    const result = await peopleGet(filters);

    res.json({
      success: true,
      result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  peopleGet,
  middleware,
};
