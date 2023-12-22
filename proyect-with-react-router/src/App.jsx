import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage.jsx'
import { ProfilePage } from './ProfilePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeData } from './HomeData.jsx'
import { RatingPage } from './RatingPage.jsx'
import { MovieDetail } from './MovieDetail.jsx'
import { CategoryMoviePage } from './CategoryMoviePage.jsx'
import './App.css'
import { useEffect, useState } from 'react'

const API_URL = 'https://api.themoviedb.org/3/'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE1MjM1ODM0YzNjN2Q0NmFmYjE4YzViOTYzM2NjNCIsInN1YiI6IjY1MDM4NWJlNmEyMjI3MDExYTdjMmE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rLchL40z0mZ5vv7UdQcYoqO8gNC1L7OEnfBTldabc4M'
  }
}

const App = () => {
  const [dayTrendingMovie, setDayTrendingMovie] = useState([])
  const [genreList, setGenreList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [nextPage, setNextPage] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    const fetchTrending = async () => {
      try {
        const response = await fetch(`${API_URL}trending/movie/day?page=${nextPage}`, options)
        if (!response.ok) throw new Error('Did not received expected data')
        const data = await response.json()
        setDayTrendingMovie(data.results)
        setError(null)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
  
    fetchTrending()
  }, [nextPage])

  useEffect(() => {
    const fetchCategoryMovie = async () => {
      try {
        const response = await fetch(`${API_URL}genre/movie/list`, options)
        if (!response.ok) throw new Error('Did not received expected data')
        const genreData = await response.json()
        setGenreList(genreData.genres)
        setError(null)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchCategoryMovie()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage error={error} setNextPage={setNextPage} isLoading={isLoading}/>}>
          <Route path='/' element={<HomeData dayTrendingMovie={dayTrendingMovie} genreList={genreList}/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
          <Route path='tendencias' element={<RatingPage dayTrendingMovie={dayTrendingMovie} setNextPage={setNextPage}/>}/>
          <Route path='/movie/:id' element={<MovieDetail/>}/>
          <Route path='/:name/:id' element={<CategoryMoviePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
