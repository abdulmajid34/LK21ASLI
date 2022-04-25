'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WatchList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WatchList.belongsTo(models.User)
    }
  };
  WatchList.init({
    title: DataTypes.TEXT,
    poster_path: DataTypes.TEXT,
    popularity: DataTypes.FLOAT,
    overview: DataTypes.TEXT,
    release_date: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'WatchList',
  });
  return WatchList;
};