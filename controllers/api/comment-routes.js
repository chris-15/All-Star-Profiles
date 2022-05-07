const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// /api/comments

//GET to get all comments
router.get("/", (req, res) => {
  Comment.findAll({
    order: [["created_at", "DESC"]],
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST to post a comment if user logged in
router.post("/", withAuth, (req, res) => {
  // checks the session is active; user logged in
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

//DELETE to delete comment by id if user logged in
router.delete("/:id", withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
