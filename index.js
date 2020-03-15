const express = require("express");
const app = express();
const morgan = require('morgan')
app.use(express.static("public"));
app.use(express.static("views"));
app.use(morgan('tiny'))
app.get("/e", function(req, res) {
  if(!req.query.q){
    return res.send("no query")
  }
  if(!req.query.color){
      return res.send(`What is this? This is an embed generator! You can change ?q=${req.query.q} and &color=0 to whatever message you want in discord!<br>Open sourced  https://github.com/moom0o/DiscordEmbedGenerator/<meta content="${req.query.q}" property="og:description">`)
  }
  res.send(`What is this? This is an embed generator! You can change ?q=${req.query.q} and &color=${req.query.color} to whatever message you want in discord!<br>Open sourced  https://github.com/moom0o/DiscordEmbedGenerator/<meta content="${req.query.q}" property="og:description"><meta name="theme-color" content="#${req.query.color}">`)
})
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
