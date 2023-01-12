import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import axios from 'axios'

class PortfolioContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      portfolio: [],
      search_results: [],
      active_currency: null,
      amount: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleChange(e){
    // this.setState({
    //   [e.target.name]: e.target.value
    // })

    axios.post('http://localhost:3000/search', {
      // name: this.state.name
      search: e.target.value
    })
    .then( (data) => {
      this.setState({
        search_results: [...data.data.currencies]
      })
    })
    .catch ( (data)=>{
      debugger
    })
  }

  handleSelect(e){
    e.preventDefault()
    const id = e.target.getAttribute('data-id')
    const activeCurrency = this.state.search_results.filter( item => item.id == parseInt(id))
    this.setState({
      active_currency: activeCurrency[0],
      search_results: []
    })
  }


  hanldeSubmit(){

  }
  render(){

    const searchOrCalculate = this.state.active_currency ?
    <Calculate
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      active_currency={this.props.active_currency}
      amount={this.state.amount}
    /> :
    <Search
    handleSelect={this.handleSelect}
    searchResults={this.state.search_results}
    handleChange={this.handleChange} />

    return(
      <div>
        {searchOrCalculate}
      </div>
    )
  }
}

export default PortfolioContainer
