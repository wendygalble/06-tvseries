import { useState, useEffect } from 'react'
import SerieCard from '../components/SerieCard'

const Home = () => {
  const myRequest = new Request('https://api.tvmaze.com/search/shows?q=girls')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(myRequest)
      .then((response) => {
        return response.json()
      }).then((series) => {
        console.log(series)
        setData(series)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      Home
      {
        data.map((item) => (
          <SerieCard key={item.id} {...item} />
        ))
        }
    </div>
  )
}

export default Home
