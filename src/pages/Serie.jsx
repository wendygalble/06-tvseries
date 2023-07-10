import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Episodios from '../components/Episodios'

const Serie = () => {
  const myRequest = new Request('https://api.tvmaze.com/shows/1/episodes')
  const [episodios, setEpisodios] = useState([])
  const [serie, setSerie] = useState([])
  const serieId = useParams().id

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
          <p>Serie {serieId}</p>
          <h1>{serie.name}</h1>
          <h5>RESUMEN</h5>
          <p>{serie.summary}</p>
        </div>

        {
        episodios.map((item)=>)
        <div key={item.id}>
          <h2>item.name</h2>
          
           </div>
        
        }

      </div>
    </div>
  )
}

export default Serie
