'use strict';
module.exports = function(sequelize, DataTypes) {
  var Compromise = sequelize.define('Compromise', {
    name: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Compromise;
};
