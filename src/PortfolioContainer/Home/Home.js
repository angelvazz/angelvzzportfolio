import React from 'react';
import Footer from './Footer/Footer';
import Profile from './Profile';
import AboutMe from '../AboutMe/AboutMe';
import './Home.css';
import NavBar from '../../components/NavBar';

export default function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <Profile />
      <Footer />
      <AboutMe />
    </div>
  );
}
