'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        email: 'kisharoseonia@gmail.com',
        username: 'KishaOnia',
        password: 'password',
        firstName: 'Kisha',
        lastName: 'Onia'
      },
      {
      email: 'demouser@gmail.com',
      username: 'DemoUser',
      password: 'password',
      firstName: 'Demo',
      lastName: 'User'
    },
      {
        email: 'kristineonia@gmail.com',
        username: 'KristineOnia',
        password: 'password',
        firstName: 'Kristine',
        lastName: 'Onia'
      },
      {
        email: 'kimtennesseeong@gmail.com',
        username: 'KimOng',
        password: 'password',
        firstName: 'Kim',
        lastName: 'Ong'
      },
      {
        email: 'britneytherottie@gmail.com',
        username: 'britneytherottie',
        password: 'password4',
        firstName: 'Britney',
        lastName: 'Onia-Ong'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['KishaOnia', 'DemoUser', 'KristineOnia', 'KimOng', 'britneytherottie'] }
    }, {});
  }
};
