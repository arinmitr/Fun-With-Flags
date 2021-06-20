import React from 'react'
import {Link} from 'react-router-dom'

import './card.styles.css'

export const Card = (props) => (

     <Link className="link" to={`/Fun-With-Flags/${props.country.name}`}>
        <div className='card-container'>
            
            <img src={props.country.flag} alt="flag"/>
            <h3>{props.country.name}</h3>
            <p className="heading">Population: <span className="details">{parseFloat(props.country.population).toLocaleString('en')}</span></p>
            <p className="heading">Capital: <span className="details">{props.country.capital}</span></p>
            <p className="heading">Region: <span className="details">{props.country.region}</span></p>
            
        </div>
    </Link>

)