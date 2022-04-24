import React from 'react'
import { front, back, db, cloud } from '../../components/iconList'
import MiniCard from '../../components/miniCard'
import './SlideTwo.css'

const SlideTwo = () => {

    return (
        <div className='card-component-two'>
            <div className='card-border-two'>
                <div className='card-body-two'>
                    <div className='card-text-two'>
                        <span>Technologies</span>
                       
                    </div>
                    
                    <div className='card-object-two'>
                         <p>Front End</p>
                        <ul>
                            {front.map((element, index) => {
                                return (
                                    <li key={index}> <MiniCard card={element} /></li>

                                )
                            })}
                        </ul>
                    </div>

                    <div className='card-object-two'>
                        <p>Back End</p>
                        <ul>
                            {back.map((element, index) => {
                                return (
                                    <li key={index}><MiniCard card={element} /></li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className='card-object-two'>
                        <p>Data Base</p>
                        <ul>
                            {db.map((element, index) => {
                                return (
                                    <li key={index}><MiniCard card={element} /></li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className='card-object-two'>
                        <p>Cloud</p>
                        <ul>
                            {cloud.map((element, index) => {
                                return (
                                    <li key={index}><MiniCard card={element} /></li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SlideTwo