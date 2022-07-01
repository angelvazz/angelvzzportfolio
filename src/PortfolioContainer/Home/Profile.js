import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import Typical from 'react-typical';
import Button from '@mui/material/Button';
import pdf from './angel-vzz-cv.pdf';
import './Profile.css';

export default function Profile({ aboutMe, contactMe }) {
  const contactMeClick = () =>
    window.scrollTo({
      top: contactMe.current.offsetTop - 30,
      behavior: 'smooth',
    });
  return (
    <div className="profile-container" ref={aboutMe}>
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <LinkedInIcon fontSize="large" />
              <GitHubIcon fontSize="large" />
              <GoogleIcon fontSize="large" />
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Angel Vazquez</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  steps={[
                    'MERN Stack Developer',
                    1000,
                    'Everything With React Js',
                    1000,
                    '& React Native',
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h1>
              <span className="profile-role-tagline">
                3 years building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <Button
              sx={{ mr: 1 }}
              variant="outlined"
              size="large"
              onClick={contactMeClick}
            >
              Hire Me
            </Button>
            <Button variant="contained" size="large" href={pdf}>
              Get Resume
            </Button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
