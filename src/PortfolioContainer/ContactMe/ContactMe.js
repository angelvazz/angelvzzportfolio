import React from 'react';
import './ContactMe.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import contact from './images/contactus.svg';
import { Card, CardContent, Grid } from '@mui/material';

const ContactMe = ({ contactMe }) => {
  return (
    <div className="contact-container">
      <h1 ref={contactMe}>Contact Me</h1>
      <div className="contact-content">
        <img src={contact} alt="contactus" className="image-contact" />
        <Card style={{ maxWidth: 450, padding: '20px 5px' }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    placeholder="Enter Your Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    placeholder="Enter Your Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="email"
                    id="outlined-basic"
                    label="Email"
                    placeholder="Enter Your Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    id="outlined-basic"
                    label="Enter The Subject"
                    placeholder="Enter The Subject"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    id="outlined-basic"
                    multiline
                    rows={4}
                    label="Message"
                    placeholder="Enter The Message"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button type="submit" variant="contained" fullWidth>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactMe;
