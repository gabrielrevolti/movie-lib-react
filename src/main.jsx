import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom"


import App from './App.jsx'

import Movie from './pages/Movie.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Upcoming from './pages/Upcoming.jsx'
import Popular from './pages/Popular.jsx'
import NowPlaying from './pages/NowPlaying.jsx'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='movie/:id' element={<Movie/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path='upcoming' element={<Upcoming/>}/>
          <Route path='popular' element={<Popular/>}/>
          <Route path='NowPlaying' element={<NowPlaying/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
