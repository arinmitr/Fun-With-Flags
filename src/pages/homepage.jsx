import React, { Component} from 'react'
import { CardList } from '../components/cardList.component'
import { SearchBox } from '../components/searchBox.component'
import Dropdown from './../components/dropdown.component'

import './homepage.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      countryData: [],
      searchByCountry: '',
      region: ''
    }
  }
  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => this.setState({ countryData: data }))
  }
  render() {
    const { countryData, region, searchByCountry } = this.state
    const uniqueRegions = [...new Set(countryData.map(e => e.region))]
    uniqueRegions[6] = "All"
    let filteredRegion = countryData
    if (region !== 'All') filteredRegion = countryData.filter((country) => country.region.toLowerCase().includes(region.toLowerCase()))

    const filteredCountry = filteredRegion.filter(country => country.name.toLowerCase().includes(searchByCountry.toLowerCase()))
    return (
      <>
      <div className="home-container">
        <div className="filter-container">
          <div className="filter-wrapper">
            <SearchBox placeholder="Search for a country..." handleChange={e => this.setState({searchByCountry:e.target.value})}/>
            <Dropdown title={region === 'All' ? 'Filter By Region' : `Filter By Region ${region}`} regions={uniqueRegions} handleChange={e => this.setState({region:e.target.value})}/>
          </div>
        </div>
        <div className="data-container">
              <CardList countries={filteredCountry}/>
        </div>
      </div>
      </>

    )
  }
}

export default Home
