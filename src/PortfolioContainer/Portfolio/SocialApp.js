import React from 'react';
import './SocialApp.css';

// Images
import img8 from './images/people.jpg';
import img18 from './images/paraguas.jpg';
import img19 from './images/rubia.jpg';
import img20 from './images/lentes.jpg';

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Fab, Paper, TextField } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { AccountCircle, ExpandMore, Search } from '@mui/icons-material';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SocialApp = () => {
  return (
    <div className="product-social">
      <div className="title-social">
        <MenuIcon />
        <FacebookIcon />
        <h2 className="social-h2">Social App</h2>
        <Search />
      </div>

      <div className="medio-social">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: 286,
            height: 70,
          }}
        >
          <Paper elevation={3} sx={{ width: '100%', height: 70, ml: 1, mr: 1 }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="What's on your mind?"
              variant="standard"
            />
          </Paper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              mb: 1.5,
              width: 79,
              height: 100,
            },
          }}
        >
          <Paper elevation={3} className="paper-uno">
            <Avatar src={img20} />
          </Paper>
          <Paper elevation={3} className="paper-dos">
            <Avatar src={img18} />
          </Paper>
          <Paper elevation={3} className="paper-tres">
            <Avatar src={img19} />
          </Paper>
        </Box>

        <Card sx={{ ml: 1, mr: 1, mb: 2 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={img8}
            alt="Paella dish"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </Card>
      </div>

      <div className="abajo-social">
        <ReceiptLongIcon />
        <CameraAltIcon />
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <PersonIcon />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default SocialApp;
