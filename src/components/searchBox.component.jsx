import React from 'react'
import './searchBox.styles.css'

export const SearchBox = ({ placeholder, handleChange}) => (
    <div className="box">
    <i class="fa fa-search"></i>
    <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
    />
    </div>
)