import React, { useState } from 'react'
//Icons
import DataObjectIcon from '@mui/icons-material/DataObject';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import BarChartIcon from '@mui/icons-material/BarChart';
import DevicesIcon from '@mui/icons-material/Devices';
import ContactMailIcon from '@mui/icons-material/ContactMail';
//Components
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
//Import Components
import './NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position='relative' color="transparent" >
        <Toolbar>
        <DataObjectIcon color="primary" />
        <Typography color="Menu" variant="h6" sx={{ flexGrow: 4 }}><Link to='/'>SBT</Link> </Typography>
        <Typography className="nav-menu-link" color="Menu" variant="button" sx={{ flexGrow: 1 }}><Link to="/" >About Us</Link></Typography>
        <Typography className="nav-menu-link" color="Menu" variant="button" sx={{ flexGrow: 1 }}><Link to='/'>Goals</Link></Typography>
        <Typography className="nav-menu-link" color="Menu" variant="button" sx={{ flexGrow: 1 }}><Link to='/'>Products</Link></Typography>
        <Typography className="nav-menu-link" color="Menu" variant="button" sx={{ flexGrow: 4 }}><Link to='/'>Contact</Link></Typography>
        
      <div className="nav-menu-mobile">
       <Link to='#' ><MenuIcon color="primary" sx={{ ml: 2 }} onClick={showSidebar}/></Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
       <ul className='nav-menu-items' onClick={showSidebar}>
         <li className='navbar-toggle'><DataObjectIcon color="primary" />SBT<Link className="link-menu" to='/#'><CloseIcon color="primary"/></Link></li>
         <li className='navbar-toggle'><Link className="link-menu" to='/#'><HomeIcon sx={{mr: 1}}/> Home</Link> </li>
         <li className='navbar-toggle'><Link className="link-menu" to='/#'><PersonSearchIcon sx={{mr: 1}}/>About Us</Link></li>
         <li className='navbar-toggle'><Link className="link-menu" to='/#'><BarChartIcon sx={{mr: 1}}/>Goals</Link></li>
         <li className='navbar-toggle'><Link className="link-menu" to='/#'><DevicesIcon sx={{mr: 1}}/>Products</Link></li>
         <li className='navbar-toggle'><Link className="link-menu" to='/#'><ContactMailIcon sx={{mr: 1}}/>Contact</Link></li>
       </ul>
      </nav>
      </Toolbar>
     </AppBar>
     </Box>
   </div>
    )
   
}