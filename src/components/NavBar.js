import React, { useEffect, useState } from 'react';
//Icons
import DataObjectIcon from '@mui/icons-material/DataObject';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import BarChartIcon from '@mui/icons-material/BarChart';
import DevicesIcon from '@mui/icons-material/Devices';
import ContactMailIcon from '@mui/icons-material/ContactMail';
//Components
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
//Import Components
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar({
  aboutMe,
  technologies,
  portfolio,
  contactMe,
}) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [y, setY] = useState(0);
  console.log(window.scrollY);

  useEffect(() => {
    const detectY = () => setY(window.pageYOffset);
    window.addEventListener('scroll', detectY);
  }, [y]);

  const aboutMeClick = () =>
    window.scrollTo({ top: aboutMe.current.offsetTop, behavior: 'smooth' });

  const technologiesClick = () =>
    window.scrollTo({
      top: technologies.current.offsetTop - 30,
      behavior: 'smooth',
    });

  const portfolioClick = () =>
    window.scrollTo({
      top: portfolio.current.offsetTop - 30,
      behavior: 'smooth',
    });

  const contactMeClick = () =>
    window.scrollTo({
      top: contactMe.current.offsetTop - 30,
      behavior: 'smooth',
    });

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color={y > 10 ? 'secondary' : 'transparent'}>
          <Toolbar>
            <Typography
              className="nav-menu-link"
              color="Menu"
              variant="button"
              sx={{ flexGrow: 1 }}
            >
              <Link to="" onClick={aboutMeClick}>
                About Me
              </Link>
            </Typography>
            <Typography
              className="nav-menu-link"
              color="Menu"
              variant="button"
              sx={{ flexGrow: 1 }}
            >
              <Link to="" onClick={technologiesClick}>
                Technologies
              </Link>
            </Typography>
            <Typography
              className="nav-menu-link"
              color="Menu"
              variant="button"
              sx={{ flexGrow: 1 }}
            >
              <Link to="" onClick={portfolioClick}>
                Portfolio
              </Link>
            </Typography>
            <Typography
              className="nav-menu-link"
              color="Menu"
              variant="button"
              sx={{ flexGrow: 1 }}
            >
              <Link to="" onClick={contactMeClick}>
                Contact
              </Link>
            </Typography>

            <div className="nav-menu-mobile">
              <Link to="">
                <MenuIcon
                  color="primary"
                  sx={{ ml: 2 }}
                  onClick={showSidebar}
                />
              </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <DataObjectIcon color="primary" />
                  Full Resposive
                  <Link className="link-menu" to="/#">
                    <CloseIcon color="primary" />
                  </Link>
                </li>

                <li className="navbar-toggle">
                  <Link className="link-menu" to="" onClick={aboutMeClick}>
                    <PersonSearchIcon sx={{ mr: 1 }} />
                    About Me
                  </Link>
                </li>
                <li className="navbar-toggle">
                  <Link className="link-menu" to="" onClick={technologiesClick}>
                    <BarChartIcon sx={{ mr: 1 }} />
                    Technologies
                  </Link>
                </li>
                <li className="navbar-toggle">
                  <Link className="link-menu" to="" onClick={portfolioClick}>
                    <DevicesIcon sx={{ mr: 1 }} />
                    Portfolio
                  </Link>
                </li>
                <li className="navbar-toggle">
                  <Link className="link-menu" to="" onClick={contactMeClick}>
                    <ContactMailIcon sx={{ mr: 1 }} />
                    Contact Me
                  </Link>
                </li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
