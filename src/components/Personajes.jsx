const Personajes = ({ person, character }) => {
  return (
    <div>
      <h5>{person.name}</h5>
      <p>As {character.name}</p>
      <div>
        <img
          style={{ maxHeight: '100px', paddingLeft: '30px' }}
          src={`${person?.image?.original}`}
        />
      </div>
    </div>
  )
}

export default Personajes
