import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {

  const [anime, setAnime] = useState([])
  const url = `https://api.jikan.moe/v4/anime`;

  useEffect(() => {
    try {
      axios.get(url)
        .then(res => {
          console.log(res.data.data)
          setAnime(res.data.data)
        })
    } catch (error) {
      console.log(error)
    }

  }, [url])

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: "3rem", placeItems: 'center', }} className="container">
        {anime.map((anime) => {
          return (
            <div className='card' key={anime.mal_id}>
              <div className='card-image'>
                <img src={anime.images.jpg.image_url} alt={anime.title} />
              </div>
              <div className='card-content'>
                <p className='title'>{anime.title}</p>
                <p>{anime.status}</p>
                <p>{anime.year}</p>
                <p>{anime.score}</p>
                <ul>
                  {anime.genres.map((genre) => {
                    return (
                      <li key={genre.mal_id}>{genre.name}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
