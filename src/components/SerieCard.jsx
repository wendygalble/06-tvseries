const SerieCard = ({ name, image }) => {
  return (
    <ul className='list-group'>
      <li className='list-group-item'>{name}</li>
      <li className='list-group-item'>{image.original}</li>
    </ul>

  )
}

export default SerieCard
