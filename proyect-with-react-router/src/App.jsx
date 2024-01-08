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
import { LogIn } from './LogIn.jsx'
import { useLocalStorage } from './useLocaleStorage.jsx'

const App = () => {
  const [dayTrendingMovie, setDayTrendingMovie] = useState([])
  const [genreList, setGenreList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [nextPage, setNextPage] = useState(1)
  const [search, setSearch] = useState('')
  const {
    items,
    saveMovietoFavorites,
    deleteMovieFromFavorites
  } = useLocalStorage('myMovieApp', [])
  
  useEffect(() => {
    setIsLoading(true)

    const fetchTrending = async () => {
      const response =  await fetchMovieDataBase.get(`trending/movie/day?`, null)
      try {
        setDayTrendingMovie(response.data.results)
        // setHasNextPage(Boolean(response.data.results))
      } catch (error) {
        setError(response.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTrending()
  }, [])

  useEffect(() => {
    const fetchCategoryMovie = async () => {
      console.log()
      const response = await fetchMovieDataBase.get('genre/movie/list', null)
        try {
          setGenreList(response.data.genres)
        } catch (error) {
          setError(response.message)
        }
    }
    fetchCategoryMovie()
  }, [])

  // useEffect(() => {
  //   const fetchAutetication = async () => {
  //     const response = await fetchMovieDataBase.get('authentication/token/new', null)
  //     try {
  //       console.log(response.data.request_token)
  //       setRequestToken(response.data.request_token)
  //     } catch (error) {
  //       setError(response.message)
  //     }
  //   }
  //   fetchAutetication()
  // }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage error={error} setNextPage={setNextPage} isLoading={isLoading} search={search} setSearch={setSearch}/>}>
          <Route path='/' element={<HomePage dayTrendingMovie={dayTrendingMovie} genreList={genreList} isLoading={isLoading} saveMovietoFavorites={saveMovietoFavorites} items={items} deleteMovieFromFavorites={deleteMovieFromFavorites}/>}/>
          <Route path='/login' element={<LogIn/>} />
          <Route path='about' element={<AboutPage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
          <Route 
            path='tendencias/' 
            element={<RatingPage 
              saveMovietoFavorites={saveMovietoFavorites} 
              items={items} 
              deleteMovieFromFavorites={deleteMovieFromFavorites}
            />}
          />
          <Route 
            path='/:name/:id' 
            element={<CategoryMoviePage 
              saveMovietoFavorites={saveMovietoFavorites} 
              items={items} 
              deleteMovieFromFavorites={deleteMovieFromFavorites}
            />}
          />
          <Route 
            path='movie/:id' 
            element={<MovieDetail
              saveMovietoFavorites={saveMovietoFavorites} 
              items={items} 
              deleteMovieFromFavorites={deleteMovieFromFavorites}
            />}
          />
          <Route 
            path='search/:name' 
            element={<SearchPage
              saveMovietoFavorites={saveMovietoFavorites} 
              items={items} 
              deleteMovieFromFavorites={deleteMovieFromFavorites}
            />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
