const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Comment model
class Comment extends Model {}

Comment.init(
  {
    // columns
    // id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // comment text column
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    // user id column
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    // post id column
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    //import sequilize connection
    sequelize,
    freezeTableName: true, // dont pluralize name of db table
    underscored: true, //underscores instead of camel case
    modelName: "comment", // model name stays lowercase in db
  }
);

module.exports = Comment;
