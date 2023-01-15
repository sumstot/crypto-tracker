import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const searchResults = this.props.searchResults.map( curr => <li key={curr.id} onClick={this.props.handleSelect} className="currency-list-item"><a href="#" data-id={curr.id}  className="currency"><span>{curr.name}</span> <span>{curr.currency_symbol}</span></a></li>)
    return(
      <div id='search'>
        <h1> Cyptocurrency Potfolio Calculator</h1>
        <form>
          <div className='form-group'>
            <label>Search for a coin</label><br/>
            <input onChange={this.props.handleChange} autoComplete="off" type="text" name="name" placeholder="Bitcoin (BTC), Ethereum (ETH), Polkadot (DOT)..." value={this.props.name} className="field"></input>
          </div>
          <div className='currency-list'>
            {searchResults}
          </div>
        </form>
      </div>
    )
  }
}

export default Search
