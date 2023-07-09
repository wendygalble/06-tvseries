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
      <p>Serie {serieId}</p>
      <h1>{serie.name}</h1>
      <h5>RESUMEN</h5>
      <p>{serie.summary}</p>
    </div>
  )
}

export default Serie
