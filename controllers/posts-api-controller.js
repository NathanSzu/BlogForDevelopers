// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => console.log(err))
  });
  

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => console.log(err))
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => console.log(err))
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    // app.get("/api/user/:name", function(req, res) {
    //   db.Post.findOne({
    //     where: {
    //       name: req.params.name
    //     }
    //   })
    // })
    var { title, summary, body, category, headerURL, UserId } = req.body;
    db.Post.create({
      title,
      summary,
      body,
      category,
      headerURL,
      UserId
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => console.log(err))
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => console.log(err))
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.postId
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(err => console.log(err))
  });
};
