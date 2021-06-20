import React from 'react'
import {Link} from 'react-router-dom'

import './borderButton.styles.css'

function BorderButton(props) {
    let str = props.value
    let res = str.split(" ", 1)
    return (
        <Link className="border-links" to={`/Fun-With-Flags/${props.value}`}>
		<button className="brd-btn" value={`${props.value}`}>
			{res}
		</button>
        </Link>
    )
}
export default BorderButton
