import { Box } from '@chakra-ui/react'
import Navbar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>

      <Navbar />
      <Box padding={5}>
        <Outlet />
      </Box>

    </>
  )
}

export default layout