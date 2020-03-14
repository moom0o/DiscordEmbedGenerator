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
  res.send(`What is this? This is an embed generator! You can change ?q=${req.query.q} to whatever message you want in discord!<br>Open sourced  https://github.com/moom0o/DiscordEmbedGenerator/<meta content="${req.query.q}" property="og:description"><meta name="theme-color" content="#28B1FF">`)
})
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
