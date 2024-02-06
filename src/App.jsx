import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div id="app">
        <NavBar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
