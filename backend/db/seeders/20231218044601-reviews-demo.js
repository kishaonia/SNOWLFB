'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Reviews';

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
        spotId:1,
        userId:2,
        review:"The happiest place in Florida! ",
        stars:4
      },
      {
        spotId:2,
        userId:3,
        review:"The happiest place in California!",
        stars:4
      },
      {
        spotId:3,
        userId:4,
        review:"The happiest place in Paris!",
        stars:4
      },
      {
        spotId:4,
        userId:1,
        review:"The happiest place in China!",
        stars:5
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
      spotId: { [Op.in]: [1, 2, 3] }
    })
  }
};
