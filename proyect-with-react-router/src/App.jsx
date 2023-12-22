import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage.jsx'
import { ProfilePage } from './ProfilePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeData } from './HomeData.jsx'
import './App.css'


const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}>
          <Route path='/' element={<HomeData/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
