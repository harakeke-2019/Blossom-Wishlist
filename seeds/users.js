exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Blossum', email: 'blossum@powerpuff.com'},
        {id: 2, name: 'Bubbles', email: 'bubbles@powerpuff.com'},
        {id: 3, name: 'Buttercup', email: 'buttercup@powerpuff.com'},
        {id: 4, name: 'Mojo Jojo', email: 'mojo@badguys.com'},
        {id: 5, name: 'Professor Utonium', email: 'professor@smartguys.com'},
        {id: 6, name: 'Sara Bellum', email: 'sara@powerpuff.com'}
      ])
    })
};
