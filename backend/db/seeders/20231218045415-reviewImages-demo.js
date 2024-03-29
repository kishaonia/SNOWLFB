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
    options.tableName = 'ReviewImages';
    return queryInterface.bulkInsert(options, [
      {
        reviewId:1,
    url:'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_webp,g_xy_center,h_500,q_75,w_1400,x_1433,y_728/v1/clients/orlandofl/4899_wdw_50th_beacons_1920x1080_18ce18fd-a6a9-4bdc-98a2-db0882347d51.jpg',
    preview:true
  },
  {
    reviewId:2,
    url:'https://upload.wikimedia.org/wikipedia/commons/e/e6/Pixarpiersunset2019_%28cropped%29.jpg',
    preview:false
  },
  {
    reviewId:3,
    url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/92/e4/97/disneyland-paris.jpg?w=1200&h=1200&s=1',
    preview:false
  },
  {
    reviewId:4,
    url:'https://secure.cdn1.wdpromedia.cn/resize/mwImage/1/720/288/75/wdpromedia.disney.go.com/media/wdpro-shdr-assets/prod/en-cn/system/images/shdr-theme-park-shanghai-disneyland-park-hero-full-new.jpg',
    preview:true
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      reviewId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
