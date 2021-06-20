import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import BorderButton from './../components/borderButton'

import './details.styles.css'

export default class Details extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            country : '',
            borders : [],
            msg : ''
        }     
    }

    componentDidMount() {

        let {name} = this.props.match.params
        fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ country: data[0] })
            return data[0].borders
        })
			.then((country) => {
				for (let i = 0; i < country.length; i++) {
					if (i > 2) break;
					fetch(`https://restcountries.eu/rest/v2/alpha/${country[i]}`)
						.then((res) => res.json())
						.then((data) =>
							this.setState({ borders: [...this.state.borders, data.name] })
						);
				}
			})
    }

    componentDidUpdate(prevProps) {

        if (this.props.match.params.name !== prevProps.match.params.name) {
            this.setState({ country: '' })
            this.setState({ borders: [] })

            let {name} = this.props.match.params
        fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ country: data[0] })
            return data[0].borders
        })
			.then((country) => {
				for (let i = 0; i < country.length; i++) {
					if (i > 2) break
					fetch(`https://restcountries.eu/rest/v2/alpha/${country[i]}`)
						.then((res) => res.json())
						.then((data) => this.setState({ borders: [...this.state.borders, data.name] })
							
						);
				}
                
			})
        }
    }

    render() {
        let c = true
        const {country, borders} = this.state  
        if(borders.length === 0)  c = false
        if(country !== '')   
        {
        const lang = country.languages.map(e => e.name)
        let languages = ''
        for(let i = 0; i < lang.length; i++) {
            if(i === (lang.length - 1))
            languages += lang[i]
            else 
            languages = lang[i] + ', '
        }
        return (
            <div className="detail-container">
                <div className="back-button-container">
                    <Link to ="/Fun-With-Flags" className="back-btn-box">
                    <button className="back-button"><i class="fas fa-long-arrow-alt-left"></i>Back</button>
                    </Link>
                </div>
                <div className="detail-wrapper">
                    <div className="img-container">
                    <img src={country.flag} alt="" />
                    </div>
                    <div className="country-wrapper">
                        <div className="country-name-container"><h2>{country.name}</h2></div>
                        <div className="detail-list">
                            <div className="list1">
                                <p>Native Name: <span className="heading-details">{country.nativeName}</span> </p>
                                <p>Population: <span className="heading-details">{parseFloat(country.population).toLocaleString('en')}</span></p>
                                <p>Region: <span className="heading-details">{country.region}</span></p>
                                <p>{country.subregion !== '' ? 'Sub Region: ' : ''}<span className="heading-details">{country.subregion}</span></p>
                                <p>Capital: <span className="heading-details">{country.capital}</span></p>
                            </div>
                            <div className="list2">
                                <p>Top Level Domain: <span className="heading-details">{country.topLevelDomain}</span></p>
                                <p>Currencies: <span className="heading-details">{country.currencies[0].name}</span></p>
                                <p>Language: <span className="heading-details">{languages}</span></p>
                            </div>
                        </div>

                        <div className={c ? 'btn-container' : 'btn-container-none'} >
                            <div className="btn-container-name"><p>Border Countries : </p></div>
                            <div className="btn-container-box"> {borders.map((border, index) => (
										<BorderButton key={index} value={border}>
											{border}
										</BorderButton>
									))}
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
        else {
            return (
                <div></div>
                )
        }
    }

}
