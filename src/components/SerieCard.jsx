const SerieCard = ({ id, name, image, summary, officialSite }) => {
  return (
    <div className='col-md-4 my-4 d-flex align-items-stretch'>
      <div className='card'>
        <a href={`/serie/${id}`}>
          <div className='image-container'>
            <img className='serie-image' src={`${image.original}`} />
          </div>
        </a>
        <div className='card-body d-flex flex-column justify-content-between'>
          <div>
            <h1 className='card-name'>{name}</h1>
            <p className='card-name'>{summary}</p>
          </div>

          <div className='mx-auto mt-3'>
            <a className='ver' href={officialSite}>Ver</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SerieCard
