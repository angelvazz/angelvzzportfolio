import React from 'react'
import './SlideOne.css'

const SlideOne = () => {
    return (
        <div className='card-component'>
             <div className='card-border'>
            <div className='card-body'>
               
                    <div className='card-text'>
                        <span>My Objective</span>
                        <p>I'm three-year full stack web developer, my skills are
                            MERN and CRUD applications, my professional goal is
                            to contribute in projects that challenge me and
                            enhance my skills.</p>
                           
                    </div>
                    <div className='card-image'>
                        <img src='https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='me' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideOne