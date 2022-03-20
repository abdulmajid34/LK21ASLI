'use strict';
const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(8)
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Users", [
    {
      username: "developer",
      email: "developer@mail.com",
      password: bcrypt.hashSync("123123", salt),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {})
  }
};
