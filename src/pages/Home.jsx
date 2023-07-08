import { useState, useEffect } from 'react'
import SerieCard from '../components/SerieCard'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const myRequest = new Request('https://api.tvmaze.com/shows')
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

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
    <div className='container'>
      <SearchBar handleSearchChange={handleSearch} />
      <div className='row'>
        {
            filteredData.map((item) => (
              <SerieCard key={item.id} {...item} />
            ))
        }
      </div>
    </div>
  )
}

export default Home
