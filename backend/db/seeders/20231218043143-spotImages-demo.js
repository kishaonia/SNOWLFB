'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
};


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
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId:1,
    url:'https://images.squarespace-cdn.com/content/v1/58520a4e37c58186144df0cf/31bd7d0c-b386-4e51-90f0-305a75c52a29/disney-world-three-day-itinerary-cinderella-castle.jpeg',
    preview:true
  },
  {
    spotId:2,
    url:'https://images.squarespace-cdn.com/content/v1/58520a4e37c58186144df0cf/31bd7d0c-b386-4e51-90f0-305a75c52a29/disney-world-three-day-itinerary-cinderella-castle.jpeg',
    preview:true
  },
  {
    spotId:3,
    url:'https://images.squarespace-cdn.com/content/v1/58520a4e37c58186144df0cf/31bd7d0c-b386-4e51-90f0-305a75c52a29/disney-world-three-day-itinerary-cinderella-castle.jpeg',
    preview:true
  },
  {
    spotId:4,
    url:'https://images.squarespace-cdn.com/content/v1/58520a4e37c58186144df0cf/31bd7d0c-b386-4e51-90f0-305a75c52a29/disney-world-three-day-itinerary-cinderella-castle.jpeg',
    preview:true
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
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4] }
    }), {}
  }
};
