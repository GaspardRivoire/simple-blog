module.exports = function(app) {

  /**
  * Function use to create an article using all parameters need.
  * Used when the submit button is pressed and redirect to index when the article is created.
  * */
  app.post("/create-article", function(req, res) {
    var art = req.body;

    app.db.collection('articles').find({}).toArray(function(err, doc) {
      if(err) {
        console.log("Error: ", err);
      }

      var newID = doc.length + 1;

      app.db.collection('articles').insertOne({
        id: parseInt(newID), 
        titre: art.nom, 
        auteur: art.auteur, 
        date: art.date, 
        resume: art.resume, 
        contenu: art.contenu
      });
    });

    res.redirect("http://localhost:8000/");
  });

   /**
   * Fonction use to see form who allow to create an article.
   */
  app.get("/post/create", function(req, res) {
    res.render("form");
  });

  /**
   * Fonction use to see only one article using his id.
   */
  app.get("/post/:id", function(req, res) {
    app.db.collection('articles').find({"id" : parseInt(req.params.id)}).toArray(function(err, doc) {
      if(err) {
        console.log("Error: ", err);
      }

      res.render("index", {'allDoc': doc });
    });
  });

  /**
   * Fonction use to delete an article using his id.
   * Redirect to the index once the article is deleted.
   */
  app.get("/post/delete/:id", function(req, res) {
    app.db.collection('articles').deleteOne({id: parseInt(req.params.id)});
    res.redirect("http://localhost:8000/");
  });
}
