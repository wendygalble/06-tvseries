const SerieCard = ({ id, name, image, summary }) => {
  return (
    <div className='col-md-3 my-3 d-flex align-items-stretch'>
      <div className='card'>
        <a href={`/serie/${id}`}>
          <div className='image-container'>
            <img className='serie-image' src={`${image.original}`} />
          </div>
        </a>
        <div className='card-body d-flex flex-column justify-content-between'>
          <div>
            <h5 className='card-name'>{name}</h5>
            <p className='card-name'>{summary}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SerieCard
