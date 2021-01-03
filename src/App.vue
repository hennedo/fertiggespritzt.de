<template>
  <div id="app">
    <div class="background">
    </div>
    <div class="container">
      <div class="data">
        Es dauert bei aktueller Geschwindigkeit noch*<br />
        <b><span if="yearsRemaining">{{yearsRemaining}} Jahre und </span>{{daysRemaining}} Tage</b><br />
        bis alle Menschen in Deutschland gegen COVID-19 geimpft sind.
      </div>
      <footer>
        *: Bei gleicher Anzahl verabreichter Dosen pro Tag, wobei zu erwarten ist, dass es mehr werden.<br />
        Quelle: <a href="https://rki-vaccination-data.vercel.app/" target="_blank">https://rki-vaccination-data.vercel.app/</a> auf Basis der Daten vom RKI<br/>
        Der Quellcode ist auf <a href="https://www.github.com/hennedo/wielangebiswirallegeimpftsind.de">Github</a> zu finden
      </footer>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      daysRemaining: 0,
      yearsRemaining: 0,
    }
  },
  mounted() {
    axios.get("/api").then(data => {
      let impfStart = new Date("2020-12-27T00:00:00")
      let lastUpdateDate = new Date(data.data.lastUpdate)
      let diffDays = Math.round((lastUpdateDate.getTime() - impfStart.getTime()) / (1000*3600*24))
      let quote = data.data.quote
      let quoteRemaining = (100-quote) / 100;
      let daysRemaining = Math.round((diffDays / quote * 100) * quoteRemaining)
      this.yearsRemaining = Math.floor(daysRemaining/365)
      this.daysRemaining = daysRemaining - (this.yearsRemaining*365)
    })
  }
}
</script>

<style>
  html, body {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0
  }
  .background {
    background-image: linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
    ), url("./assets/corona.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    left:0;
    top: 0;
    z-index: -1;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #eeeeee;
    padding: 0 30px;
    font-size: 28px;
  }
  .container {
    display: grid;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  b {
    font-size: 35px;
  }
  a:link, a:visited, a:hover, a:focus {
    text-decoration: none;
    color: #888888;
  }
  footer {
    font-size: 13px;
    padding-top: 100px;
    align-self: last baseline;
  }
  @media (min-width: 1080px) {
    #app {
      font-size: 70px;
    }
    b {
      font-size: 95px;
    }
    footer {
      font-size: 20px;
    }
  }
</style>
