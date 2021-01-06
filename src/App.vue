<template>
  <div id="app" class="container">
    <main id="main">
      <h1 class="data">
        Es dauert bei aktueller Geschwindigkeit noch*<br />
        <strong><span if="yearsRemaining">{{yearsRemaining}} Jahre und </span>{{daysRemaining}} Tage</strong><br />
        bis alle Menschen in Deutschland gegen COVID-19 geimpft sind.
      </h1>
    </main>
    <aside class="footer">
      <p>
        *: Bei gleicher Anzahl verabreichter Dosen pro Tag, wobei zu erwarten ist, dass es mehr werden.<br />
        Das RKI gibt an "Anmerkung zu den Indikationen: Es können mehrere Indikationen je geimpfter Person vorliegen."<br />
        Jede Person muss zweimal geimpft werden um den vollständigen Schutz zu haben. Ich kann leider derzeit noch nicht aus der Datenquelle erfahren, ob die zweite Dosis die Anzahl der geimpften Personen erhöht. Details zu meiner Berechnung sind auf <a href="https://www.github.com/hennedo/fertiggespritzt.de">Github</a> zu finden
        Quelle: <a href="https://rki-vaccination-data.vercel.app/" target="_blank">https://rki-vaccination-data.vercel.app/</a> auf Basis der Daten vom RKI
      </p>
      <p>
        Der Quellcode ist auf <a href="https://www.github.com/hennedo/fertiggespritzt.de">Github</a> zu finden
      </p>
    </aside>
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
    axios.get("https://rki-vaccination-data.vercel.app/api").then(data => {
      let impfStart = new Date("2020-12-27T00:00:00")
      let lastUpdateDate = new Date(data.data.lastUpdate)
      let diffDays = Math.round((lastUpdateDate.getTime() - impfStart.getTime()) / (1000*3600*24))
      let daysSinceStart = Math.round(Date.now() - impfStart.getTime() / (1000*3600*24))
      let quote = data.data.quote
      let daysRemaining = Math.round((diffDays / quote * 100) - daysSinceStart)
      this.yearsRemaining = Math.floor(daysRemaining/365)
      this.daysRemaining = daysRemaining - (this.yearsRemaining*365)
    })
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0
  }

  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #eeeeee;

    background-image: linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
    ), url("./assets/corona.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    line-height: 1.5;
  }

  .container {
    min-height: 100vh;

    max-width: 75rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

  #main {
    margin: auto;
  }

  h1 {
    text-align: center;
    margin: 0;
    font-size: 1.75rem;
    font-size: clamp(1.75rem, 6vw, 4.5rem);
    font-weight: normal;
    line-height: 1.3;
  }

  h1 strong {
    font-size: 1.375em;
  }

  a:link, a:visited {
    text-decoration: none;
    color: #888888;
  }
  a:hover {
    text-decoration: underline;
  }
  a:focus {
    text-decoration: underline;
    color: #f00;
    outline: none;
  }

  .footer {
    padding-top: 2rem;
  }

</style>
