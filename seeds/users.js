exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Blossum', email: 'blossum@powerpuff.com'},
        {id: 2, name: 'Bubbles', email: 'bubbles@powerpuff.com'},
        {id: 3, name: 'Buttercup', email: 'buttercup@powerpuff.com'}
      ])
    })
};
