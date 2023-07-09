import { Link } from 'react-router-dom'

const SerieCard = ({ id, name, image, summary, officialSite }) => {
  return (
    <div className='col-md-4 my-4 d-flex align-items-stretch'>
      <div className='card'>
        <Link to={`/serie/${id}`}>
          <div className='image-container'>
            <img className='serie-image' src={`${image.original}`} />
          </div>
        </Link>
        <div className='card-body d-flex flex-column justify-content-between'>
          <div>
            <h1 className='card-name'>{name}</h1>
            <p className='card-name'>{summary}</p>
          </div>

          <div className='mx-auto mt-3'>
            <Link className='ver' to={officialSite}>WATCH NOW</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SerieCard
