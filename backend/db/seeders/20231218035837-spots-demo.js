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
    options.tableName = 'Spots'
    return queryInterface.bulkInsert(options, [
      {
        ownerId:1,
        address:'1375 Buena Vista',
        city:'Orlando ',
        state:'Florida ',
        country:'USA ',
        lat:54.2,
        lng:98.23,
        name:'Walt Disney World',
        description:'Happiest Place on earth!',
        price: '1150'
      },
      {
        ownerId:2,
        address:'1313 Disneyland Drive',
        city:'Anaheim',
        state:'California',
        country:'USA',
        lat:12.4,
        lng:37.56,
        name:'Disneyland California',
        description:'Happiest Place on earth!',
        price: '1000'
      },
      {
        ownerId:3,
        address:'Bd de Parc ',
        city:'Coupvray ',
        state:'NA',
        country:'France ',
        lat:190.87,
        lng:65.3,
        name:'Disneyland Paris',
        description:'Happiest place on earth!',
        price: '1000'
      },
      {
        ownerId:4,
        address:'Chuansha New Town',
        city:'Pudong',
        state:'NA',
        country:'China',
        lat:435.1,
        lng:87.0,
        name:'Shanghai Disneyland',
        description:'Happiest place on earth!',
        price: '1050',
      },
      
    ], options)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Spots'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      id: { [Op.in]: ['1,2,3'] }
    }, {})
  }
};
