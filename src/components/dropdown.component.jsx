import React, {useState} from 'react'

import './dropdown.styles.css'

function DropDownItem({ title, handleChange }) {
	return (
		<button className="dropdown-item" value={`${title}`} onClick={handleChange}>
			{title}
		</button>
	);
}

function Dropdown(props) {
    let count = 0;
	const [showMenu, setShowMenu] = useState(false);
	const [initial, setInitial] = useState(true);

    function toggle(e) {
        e.preventDefault();
        setInitial(false);
        setShowMenu((prevShowMenu) => (prevShowMenu ? false : true));
        }
    return (
        <div className="dropdown-container">
            <button className="dropdown-btn" onClick={toggle}>
                <span>{props.title}</span>
                <i className="fas fa-chevron-down"></i>
            </button>
            <div className={
                `dropdown-menu 
                ${initial ? 'initial' : null} 
                ${showMenu ? 'show' : 'hide' }
                `}>
                {props.regions.map(region => (
                    <DropDownItem title={region} handleChange={props.handleChange} key={count++} />
                ))}
                </div>
        </div>
    )
}

export default Dropdown
