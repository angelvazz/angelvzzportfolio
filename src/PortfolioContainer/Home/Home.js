import React, { useRef } from 'react';
import Footer from './Footer/Footer';
import Profile from './Profile';
import AboutMe from '../AboutMe/AboutMe';
import './Home.css';
import NavBar from '../../components/NavBar';
import Portfolio from '../Portfolio/Portfolio';
import ContactMe from '../ContactMe/ContactMe';

export default function Home() {
  const aboutMe = useRef(null);
  const technologies = useRef(null);
  const portfolio = useRef(null);
  const contactMe = useRef(null);

  return (
    <div className="home-container">
      <NavBar
        aboutMe={aboutMe}
        technologies={technologies}
        portfolio={portfolio}
        contactMe={contactMe}
      />
      <Profile aboutMe={aboutMe} contactMe={contactMe} />
      <Footer />
      <AboutMe technologies={technologies} />
      <Portfolio portfolio={portfolio} />
      <Footer />
      <ContactMe contactMe={contactMe} />
    </div>
  );
}
