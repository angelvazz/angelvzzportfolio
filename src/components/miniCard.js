import React from 'react'
import './miniCard.css'

const MiniCard = (props) => {
    const {card} = props
    
    return (
        <div className='mini-card-container'>
            <div className='mini-card-border'>
                <div className='mini-card-body'>
                    <div className='icon'>{card.icon}</div>
                    <div className='title'>{card.name}</div>
                </div>
            </div>
        </div>
    )
}

export default MiniCard