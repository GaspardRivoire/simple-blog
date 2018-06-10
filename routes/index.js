var posts = require("./posts");

module.exports = function(app) {

  /**
   * Function use to get all articles.
   */
  app.get("/", function(req, res) {
    app.db.collection('articles').find({}).toArray(function(err, doc) {
      if(err) {
        console.log("Error: ", err);
      }

      res.render("index", {'allDoc': doc});
    });
  });

  // Register posts endpoint
  posts(app);
}
