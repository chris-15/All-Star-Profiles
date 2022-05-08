// seeding Post data to DB
const { Post } = require("../models");

const postData = [
  {
    title: "Finals Highlights",
    post_url: "https://www.youtube.com/watch?v=QEPjD3elq2M",
    post_text: "These are my highlights during the 2000 Finals",
    user_id: 1,
  },
  {
    title: "My Top Plays",
    post_url: "https://www.youtube.com/watch?v=sgI0YCVse9U",
    post_text: "These are my career highlights",
    user_id: 2,
  },
  {
    title: "My best three-point contest",
    post_url: "https://www.youtube.com/watch?v=Os3Z8CutS-Q",
    post_text: "My best score during a three-point contest",
    user_id: 3,
  },
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
