import React from 'react';

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AddIcon from '@mui/icons-material/Add';
import { Button, Fab, Grid, Typography } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IosShareIcon from '@mui/icons-material/IosShare';

//imports
import './StreamingApp.css';
import img5 from './images/stranger-logo.jpg';

const StreamingApp = () => {
  return (
    <>
      <div className="streaming-cont">
        <div className="parte-arriba">
          <MenuIcon />
          <SmartDisplayIcon color="error" />
          <h2 className="streaming-h2">Streaming App</h2>
          <SearchIcon />
        </div>
        <div className="medio">
          <div className="parte-fotos">
            <img className="stranger-logo" src={img5} alt="phone" />
            <div className="cont-grid">
              <Grid
                className="grid-cont-text"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 2, sm: 1, md: 1 }}
              >
                <Grid item xs={6}>
                  <Typography>90% Match</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>120 min</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>PG-15</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>2017</Typography>
                </Grid>
              </Grid>

              <Grid
                className="grid-cont-text"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 0, sm: 0, md: -1 }}
              >
                <Grid item xs={4}>
                  <ThumbUpIcon sx={{ mt: 5 }} />
                </Grid>
                <Grid item xs={4}>
                  <AddIcon sx={{ mt: 5 }} />
                </Grid>
                <Grid item xs={4}>
                  <IosShareIcon sx={{ ml: 1.9, mt: 5 }} />
                </Grid>
              </Grid>

              <Grid
                className="grid-cont-text"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
              >
                <Grid item xs={3.7}>
                  <Typography>Like</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Add</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Share</Typography>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="parte-medio">
            <Button
              className="boton-play"
              sx={{ mt: 2 }}
              size="large"
              variant="contained"
              color="error"
              startIcon={<PlayCircleIcon />}
            >
              {' '}
              Play{' '}
            </Button>
            <p className="p-stranger">
              When a boy goes missing, his friends, family and the police are
              caught up in a series of mysterious events trying to find him. His
              absence coincides with the sighting of a terrifying creature and
              the appearance of a strange girl.
            </p>
          </div>
        </div>
        <div className="abajo-streaming">
          <ReceiptLongIcon />
          <CameraAltIcon />
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <PersonIcon />
          <SettingsIcon />
        </div>
      </div>
    </>
  );
};

export default StreamingApp;
