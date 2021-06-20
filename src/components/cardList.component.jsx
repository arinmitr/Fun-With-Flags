import React from 'react'
import {Card} from './card.component'

import './cardList.styles.css'

export const CardList = (props) => (
    <div className='card-list'>
    {props.countries.map((country) => (
        <Card key={country.alpha3Code} country={country}></Card>
    ))}
    </div>
)