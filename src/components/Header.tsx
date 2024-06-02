import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const styles = {
    color: "white",
    margin: "0.5rem",
    textDecoration: "none"
}

function Header() {
  return (
  <>
     <AppBar position='static'>
    <Toolbar>
        <Typography variant='h5' mr={'auto'}>LEARN NOW</Typography>
        <Link style={styles} to={"/"}>Home</Link>
        {/* <Link style={styles} to={"/"}>Login</Link> */}
    </Toolbar>
   </AppBar>
   </>
  )
}

export default Header