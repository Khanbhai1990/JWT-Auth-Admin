
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {username: "admin1", password:"123"},
        {username: "admin2", password:"asd"}
      ]);
    });
};
