import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Serie = () => {
  const [serie, setSerie] = useState([])
  const serieId = useParams().id

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
    <div>
      <p>El ID de la serie es {serieId}</p>
      <h2>NOMBRE: {serie.name}</h2>

    </div>
  )
}

export default Serie
