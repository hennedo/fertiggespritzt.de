const express = require('express');
const axios = require('axios');
const app = express();
app.set('view engine','ejs');


// Indexpage
app.get('/',async (req,res)=>{
  // Async/Await syntax für Promises (persöhnliche preferenz)
  var data = await axios.get("https://rki-vaccination-data.vercel.app/api")

  // Code copy/Paste aus /src/App.vue (entfernung von referenzen to *this*)
  let impfStart = new Date("2020-12-27T00:00:00")
  let lastUpdateDate = new Date(data.data.lastUpdate)
  let diffDays = Math.round((lastUpdateDate.getTime() - impfStart.getTime()) / (1000*3600*24))
  let quote = data.data.quote
  let quoteRemaining = (100-quote) / 100;
  let daysRemaining = Math.round((diffDays / quote * 100) * quoteRemaining)
  let yearsRemaining = Math.floor(daysRemaining/365)
  daysRemaining = daysRemaining - (yearsRemaining*365)

  // Rendern des Templates mit den vorher-berechneten daten (/views/index.ejs)
  res.render('index',{
    daysRemaining,
    yearsRemaining
  })
})

const artikel_engine = require('./artikel_engine');
app.get('/artikel/:name',(req,res)=>{
  res.render('artikel',artikel_engine.md(req.params.name+'.md'))
})

// Verteilt statische Dateine aus /assets
app.use(express.static(__dirname + '/assets'));

// Startet den server
app.listen(process.env.PORT || 3000)
