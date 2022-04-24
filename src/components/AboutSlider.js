import { Carousel } from 'react-bootstrap'
import React from 'react'
import SlideOne from '../PortfolioContainer/AboutMe/SlideOne'
import SlideTwo from '../PortfolioContainer/AboutMe/SlideTwo'
import SlideThree from '../PortfolioContainer/AboutMe/SlideThree'

const AboutSlider = () => {
  return (
    <>
    <Carousel variant="dark">
  <Carousel.Item interval={100000}>
  <SlideOne/>
  </Carousel.Item>
  <Carousel.Item interval={100000}>
    <SlideTwo/>
  </Carousel.Item>
  <Carousel.Item interval={100000}>
  <SlideThree/>
  </Carousel.Item>
</Carousel></>
  )
}

export default AboutSlider