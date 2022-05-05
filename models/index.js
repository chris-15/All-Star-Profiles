const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// table associations

//user has many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// post only belongs to a user not many users
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

//Comments belong to a user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

//Comments belong to posts 
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

//Users can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

//Posts can have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});


module.exports = { User, Post, Comment };