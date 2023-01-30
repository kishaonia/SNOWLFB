'use strict';


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Bookings';

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
    return queryInterface.bulkInsert(options, [
      {
        id:1,
        spotId:2,
        userId:1,
        startDate:'2023-01-17',
        endDate:'2023-01-23'
      },
      {
        id:2,
        spotId:3,
        userId:2,
        startDate:'2023-07-07',
        endDate:'2023-07-10'
      },
      {
        id:3,
        spotId:4,
        userId:3,
        startDate:'2024-07-07',
        endDate:'2024-07-10'
      },
      {
        id:4,
        spotId:1,
        userId:4,
        startDate:'2025-07-10',
        endDate:'2025-07-10'
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3,] }
    })
  }
};
