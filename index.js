const express = require("express");
const app = express();
const morgan = require('morgan')
app.use(express.static("public"));
app.use(express.static("views"));
app.use(morgan('tiny'))
app.get("/e", function(req, res) {
  if(!req.query.q && !req.query.color && !req.query.image && !req.query.title && !req.query.tinytitle){
    return res.status(400).send(`You don't have any valid params! More info in Github.<br>Open sourced  https://github.com/moom0o/DiscordEmbedGenerator/<meta content="ERROR: No valid params." property="og:description"><meta name="theme-color" content="#9e0303">`)
  }
  let description = `${req.query.q}`.replace("undefined", "")
  let color = `${req.query.color}`.replace("undefined", "")
  let image = `${req.query.image}`.replace("undefined", "")
  let title = `${req.query.title}`.replace("undefined", "")
  let tinytitle = `${req.query.tinytitle}`.replace("undefined", "")
  res.send(`What is this? This is an embed generator! You can change ?q=${req.query.q} and &color=${req.query.color} (more in github link.) to whatever message you want in discord!<br>Open sourced  https://github.com/moom0o/DiscordEmbedGenerator/<meta content="${description}" property="og:description"><meta name="theme-color" content="#${color}"><meta content="${title}" property="og:title"><meta content="${tinytitle}" property="og:site_name"><meta content='${image}' property='og:image'>`)
})
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
