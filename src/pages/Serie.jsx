import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Episodios from '../components/Episodios'
import Personajes from '../components/Personajes'

const Serie = () => {
  const [personajes, setPersonajes] = useState([])
  const [episodios, setEpisodios] = useState([])
  const [serie, setSerie] = useState([])
  const serieId = useParams().id
  const myRequest = new Request(`https://api.tvmaze.com/shows/${serieId}/episodes`)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${serieId}/cast`)
      .then((response) => {
        return response.json()
      }).then((per) => {
        console.log(per)
        setPersonajes(per)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    fetch(myRequest)
      .then((response) => {
        return response.json()
      }).then((epi) => {
        console.log(epi)
        setEpisodios(epi)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${serieId}`)
      .then((response) => {
        return response.json()
      }).then((series) => {
        setSerie(series)
      }).catch((error) => {
        console.error(error)
      })
  }, [serieId])

  return (
    <div className='container'>
      <div className='row'>
        <div>
          <img
            style={{ maxHeight: '500px', paddingLeft: '30px' }}
            src={`${serie?.image?.original}`}
          />
        </div>

        <div>
          <p>Serie {serieId}</p>
          <h1>{serie.name}</h1>
          <h5>RESUMEN</h5>
          <p>{serie.summary}</p>
        </div>

        {
        episodios.map((item) => (
          <Episodios key={item.id} {...item} />
        ))

        }

        {
        personajes.map((item) => (
          <Personajes key={item.id} {...item} />
        ))

        }

      </div>
    </div>
  )
}

export default Serie
