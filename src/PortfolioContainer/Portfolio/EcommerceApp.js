import React from 'react';
import './EcommerceApp.css';
import img7 from './images/ropa.jpg';
import img17 from './images/mochila.jpg';
import img18 from './images/bici.jpg';
import img19 from './images/armario.jpg';

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Paper } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Search } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const EcommerceApp = () => {
  return (
    <div className="product-ecommerce">
      <div className="title-ecommerce">
        <MenuIcon />
        <ShoppingCartIcon />
        <h2 className="ecommerce-h2">Ecommerce App</h2>
        <Search />
      </div>
      <div className="medio">
        <div className="medio-ecommerce">
          <h2 className="h2-mejores-promos">
            The best promotions, you can find them here
          </h2>
        </div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              mb: 2,
              maxWidth: 120,
              maxHeight: 138,
            },
          }}
        >
          <Paper elevation={4}>
            <img className="mochila-img" src={img17} alt="mochila" />
            <p className="oferta-p">Deal of the day</p>
            <p className="off-p">30% off in store</p>
          </Paper>
          <Paper elevation={4}>
            <img className="mochila-img" src={img18} alt="mochila" />
            <p className="oferta-p">Deal of the day</p>
            <p className="off-p">30% off in store</p>
          </Paper>
        </Box>
        <p className="ofertas-h3">Trending offers</p>
        <div className="ofertas-tendencia">
          <div>
            <img className="ropa-img2" src={img7} alt="ecommerce" />
            <p className="p-tendencias">$180 - $600</p>
            <p className="ropa-seleccionada">40% off on clothes</p>
            <p className="p-ver">See more</p>
          </div>
          <div>
            <img className="ropa-img2" src={img19} alt="ecommerce" />
            <p className="p-tendencias">$180 - $600</p>
            <p className="ropa-seleccionada">40% off on clothes</p>
            <p className="p-ver">See more</p>
          </div>
        </div>
      </div>
      <div className="abajo-ecommerce">
        <ReceiptLongIcon />
        <CameraAltIcon />
        <Link to="/">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
        <PersonIcon />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default EcommerceApp;
