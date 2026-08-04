import './App.css'
import TopBar from './components/TopBar'

const tecniche_info = [
  {
    nome: "Build",
    icona: "B",
    descrizione:
      "La tecnica più diretta: gli ingredienti vengono versati uno sopra l'altro direttamente nel bicchiere di servizio, di solito già pieno di ghiaccio, senza l'uso di shaker o mixing glass.",
    esempio: "Negroni, Gin Tonic, Cuba Libre, Moscow Mule"
  },
  {
    nome: "Stir & Strain",
    icona: "S",
    descrizione:
      "Gli ingredienti (spiritosi e senza succhi o sciroppi densi) vengono miscelati nel mixing glass con ghiaccio, usando un cucchiaio bar con movimento rotatorio, poi filtrati con lo strainer in un bicchiere freddo, spesso senza ghiaccio.",
    esempio: "Dry Martini, Manhattan"
  },
  {
    nome: "Shake & Strain",
    icona: "Sh",
    descrizione:
      "Gli ingredienti vengono agitati con energia nello shaker insieme al ghiaccio, per raffreddare, diluire e amalgamare bene succhi, sciroppi o albume, poi filtrati nel bicchiere di servizio.",
    esempio: "Whiskey Sour, Daiquiri, Margarita, Espresso Martini"
  },
  {
    nome: "Muddle & Build",
    icona: "M",
    descrizione:
      "Erbe, frutta o zucchero vengono pestati delicatamente sul fondo del bicchiere con un pestello per rilasciarne oli essenziali e succhi, prima di completare il drink direttamente nel bicchiere.",
    esempio: "Mojito, Caipirinha"
  },
  {
    nome: "Blend",
    icona: "Bl",
    descrizione:
      "Gli ingredienti vengono frullati insieme al ghiaccio tritato in un blender, fino a ottenere una consistenza densa e cremosa, simile a uno slush.",
    esempio: "Piña Colada"
  },
  {
    nome: "Shake & Build",
    icona: "SB",
    descrizione:
      "Una parte degli ingredienti viene shakerata con ghiaccio, poi il tutto viene versato nel bicchiere di servizio e completato (\"toppato\") con un ingrediente frizzante come soda o cola.",
    esempio: "Long Island Iced Tea, Tom Collins"
  },
  {
    nome: "Build & Roll",
    icona: "R",
    descrizione:
      "Il drink viene \"rollato\", ovvero versato delicatamente da un bicchiere all'altro un paio di volte, invece che shakerato: serve a mescolare senza montare troppo ingredienti densi come il succo di pomodoro.",
    esempio: "Bloody Mary"
  },
  {
    nome: "Build & Float",
    icona: "F",
    descrizione:
      "Il drink viene costruito nel bicchiere e un ultimo ingrediente (spesso panna o un liquore leggero) viene versato molto lentamente sul dorso di un cucchiaino, così da farlo galleggiare a strati in superficie.",
    esempio: "White Russian, Mai Tai"
  }
]

function Learn() {
  return (
    <>
    <TopBar></TopBar>
    <section id="learn">
      <h1 className="name">Le tecniche di preparazione</h1>
      <p className="learn-intro">
        Ogni cocktail nasce da un metodo preciso. Ecco le tecniche di base usate dietro il bancone.
      </p>

      <ul className="learn-grid">
        {tecniche_info.map((t, index) => (
          <li className="card" key={index}>
            <div className="badge">{t.icona}</div>
            <h3 className="name">{t.nome}</h3>
            <p className="tech-descrizione">{t.descrizione}</p>
            <p className="note">Esempi: {t.esempio}</p>
          </li>
        ))}
      </ul>
    </section>
    </>
  )
}

export default Learn