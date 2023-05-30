import Navbar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
    
    <Navbar />
    <Outlet />
    
    </>
  )
}

export default layout