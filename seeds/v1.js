const berita_seed = require('../dummies/berita_seed')
const mading_seed = require('../dummies/mading_seed')
const high_official_seed = require('../dummies/high_official_seed')

exports.seed = function(knex, Promise) {

  return Promise.all([

    knex('berita').del()
      .then(function () {
        return knex('berita').insert(berita_seed);
      }),
    knex('mading').del()
      .then(function () {
        return knex('mading').insert(mading_seed);
      }),
    knex('high_official').del()
      .then(function () {
        return knex('high_official').insert(high_official_seed);
      })
      
  ])

};
