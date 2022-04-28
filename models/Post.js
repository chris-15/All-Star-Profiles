const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Post model
class Post extends Model {}

//defining columns
Post.init(
    {
        // id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //posts title column 
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // posts  url column
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true,
            }
        },
        // posts text column 
        post_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // user id column 
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
    //import sequilize connection
    sequelize,
    freezeTableName: true, // dont pluralize name of db table
    underscored: true, //underscores instead of camel case
    modelName: "post", // model name stays lowercase in db
    }
);

module.exports = Post;