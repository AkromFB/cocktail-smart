
function Card({ nome, base, tecnica, ingredienti, note }) {

  return (
    <article className="card">

      {base && <div className="badge">{base}</div>}

      <h2 className="name">{nome}</h2>

      {tecnica && <span className="tecnica">{tecnica}</span>}

      <ul className="ingredienti">
        {ingredienti.map((i, index) => (
          <li key={index}>
            <span>{i.nome}</span>
            <span className="qt">
              {i.qt != null ? `${i.qt} ml` : i.unit}
            </span>
          </li>
        ))}
      </ul>

      {note && <p className="note">{note}</p>}

    </article>
  )
}

export default Card