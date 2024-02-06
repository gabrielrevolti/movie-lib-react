import React , { useState, useEffect, useRef } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import { FiMenu } from "react-icons/fi";

import "./NavBar.css"

const NavBar = () => {
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)

  let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)) {
        setOpen(false)
      } 
    }

    document.addEventListener("mousedown", handler)

    return() => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const navigate = useNavigate()

  const handleSubmit = (ev) => {
    ev.preventDefault()
   
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <>
      <nav id='navbar'>
      <div className='menu-container' ref={menuRef}>
        <h2 className='menu-trigger' onClick={() => {setOpen(!open)}}>
          <FiMenu className='menu-btn'/>
        </h2>

        <h2 className='moviesLib'>
          <Link to="/">
            <BiCameraMovie/> MoviesLib
            </Link>
        </h2>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
        <ul>
          <li className='dropdownItem'>{<Link to={`/`}>Melhores</Link>}</li>
          <li className='dropdownItem'>{<Link to={`/upcoming`}>Em breve</Link>}</li>
          <li className='dropdownItem'>{<Link to={`/popular`}>Populares</Link>}</li>
          <li className='dropdownItem'>{<Link to={`/NowPlaying`}>Em cartaz</Link>}</li>
        </ul>
        </div>
      </div>
    
   

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Busque um filme' 
          onChange={(ev) => setSearch(ev.target.value)}
          value={search}
          />
        <button type='submit'>
          <BiSearchAlt2/>
        </button>
      </form>
    </nav>

    </>
  )
}

export default NavBar