'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [{
        name: "gipadmin",
        email: "gip@gip.com",
        password: "gipadmin",
        cpf: "60000000000",
        school: "FGF",
        birthday: "2017-06-14",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
