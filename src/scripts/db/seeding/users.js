const knex = require("knex");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('table_name').del()
//   await knex('table_name').insert([
//     {id: 1, colName: 'rowValue1'},
//     {id: 2, colName: 'rowValue2'},
//     {id: 3, colName: 'rowValue3'}
//   ]);
// };

// const faker = require("faker");
// exports.seed = async function (knex) {
//   // Deletes ALL existing entries
//   await knex("users").del();
//   for (let i = 0; i < 10; i += 1) {
//     await knex("users").insert([
//       {
//         id: faker.random.number(),
//         firstname: faker.name.firstName(),
//         lastname: faker.name.lastName(),
//         age: faker.random.number(),
//         address: faker.address.secondaryAddress(),
//       },
//     ]);
//   }
// };

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, name: "Hettie Marshall", email: "lantunde@acbo.va" },
        { id: 2, name: "Hester Owens", email: "zo@girih.lv" },
        { id: 3, name: "Henry Jackson", email: "bekamohi@owo.mt" },
      ]);
    });
};
