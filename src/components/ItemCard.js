import React from 'react'
import './ItemCard.css'

export default function ItemCard(props) {
    
    return (
        <>
            <div className='cardBackground'>
                <h2 className='cardHead'>{props.id}</h2>
                <p className='cardContent'>{props.name}</p>
            </div>
        </>
    )
}
