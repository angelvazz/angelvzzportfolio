import React from 'react'
import './Footer.css'
import footer from '../../../assets/Home/shape-bg.png'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <img src={footer} alt='footer' />
      </div>
    </div>
  )
}
