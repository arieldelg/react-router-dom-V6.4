import { LayoutPage } from './LayoutPage.jsx'
import { AboutPage } from './AboutPage.jsx'
import { ProfilePage } from './ProfilePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage.jsx'
import { RatingPage } from './RatingPage.jsx'
import { MovieDetail } from './MovieDetail.jsx'
import { CategoryMoviePage } from './CategoryMoviePage.jsx'
import { fetchMovieDataBase } from './api.js'
import { SearchPage } from './SearchPage.jsx'
import './App.css'
import { useEffect, useState } from 'react'

const App = () => {
  const [dayTrendingMovie, setDayTrendingMovie] = useState([])
  const [genreList, setGenreList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [nextPage, setNextPage] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setIsLoading(true)
    const fetchTrending = async () => {
      const response =  await fetchMovieDataBase.get(`trending/movie/day?page=${nextPage}`)
      try {
        setDayTrendingMovie(response.data.results)
      } catch (error) {
        setError(response.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTrending()
  }, [nextPage])

  useEffect(() => {
    const fetchCategoryMovie = async () => {
      const response = await fetchMovieDataBase.get('genre/movie/list')
        try {
          setGenreList(response.data.genres)
        } catch (error) {
          setError(response.message)
        }
    }
    fetchCategoryMovie()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage error={error} setNextPage={setNextPage} isLoading={isLoading} search={search} setSearch={setSearch}/>}>
          <Route path='/' element={<HomePage dayTrendingMovie={dayTrendingMovie} genreList={genreList}/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
          <Route path='tendencias/' element={<RatingPage data={dayTrendingMovie} setNextPage={setNextPage}/>}/>
          <Route path='/:name/:id' element={<CategoryMoviePage nextPage={nextPage} setNextPage={setNextPage}/>}/>
          <Route path='movie/:id' element={<MovieDetail/>}/>
          <Route path='search/:name' element={<SearchPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
