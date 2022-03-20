'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.WatchList)
      User.hasMany(models.Comment)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: { args: true, msg: "username already exists" },
      validate : {
        notEmpty : {
          args: true,
          msg : "Username should not be empty"
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      unique: { args: true, msg: "email already exists" },
      validate : {
        isEmail : {
          msg : "Email is incorrect"
        },
        notEmpty : {
          args: true,
          msg : "Email should not be empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          args: true,
          msg : "Password should not be empty"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};