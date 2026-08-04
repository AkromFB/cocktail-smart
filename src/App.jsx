import { useState, useMemo } from 'react'
import './App.css'
import Card from './components/Card'
import { cocktail_list } from './data'
import TopBar from './components/TopBar'

function App() {
  const [search, setSearch] = useState('')
  const [base, setBase] = useState('Tutti')
  const [tecnica, setTecnica] = useState('Tutte')

  const basi = useMemo(
    () => ['Tutti', ...new Set(cocktail_list.map(c => c.base))],
    []
  )

  const tecniche = useMemo(
    () => ['Tutte', ...new Set(cocktail_list.map(c => c.tecnica))],
    []
  )

  const filtered = cocktail_list.filter(c => {
    const matchBase = base === 'Tutti' || c.base === base
    const matchTecnica = tecnica === 'Tutte' || c.tecnica === tecnica
    const matchSearch =
      c.nome.toLowerCase().includes(search.toLowerCase()) ||
      c.ingredienti.some(i => i.nome.toLowerCase().includes(search.toLowerCase()))
    return matchBase && matchTecnica && matchSearch
  })

  return (
    <>
      <header className="filter-bar">
        <TopBar></TopBar>
        <input
          type="text"
          className="filter-search"
          placeholder="Cerca cocktail o ingrediente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-chips">
          {basi.map((b, i) => (
            <button
              key={i}
              className={`chip ${base === b ? 'chip-active' : ''}`}
              onClick={() => setBase(b)}
            >
              {b}
            </button>
          ))}
        </div>

        <select
          className="filter-select"
          value={tecnica}
          onChange={(e) => setTecnica(e.target.value)}
        >
          {tecniche.map((t, i) => (
            <option key={i} value={t}>{t}</option>
          ))}
        </select>

        {(search || base !== 'Tutti' || tecnica !== 'Tutte') && (
          <button
            className="filter-reset"
            onClick={() => { setSearch(''); setBase('Tutti'); setTecnica('Tutte') }}
          >
            Reset
          </button>
        )}
      </header>

      <section id="center">
        <ul className="grid">
          {filtered.map((c, index) => (
            <Card
              key={index}
              nome={c.nome}
              base={c.base}
              tecnica={c.tecnica}
              ingredienti={c.ingredienti}
              note={c.note}
            />
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="empty-state">Nessun cocktail trovato con questi filtri.</p>
        )}
      </section>
    </>
  )
}

export default App