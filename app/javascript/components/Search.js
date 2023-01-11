import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div id='search'>
        <h1> Cyptocurrency Potfolio Calculator</h1>
        <form>
          <div className='form-group'>
            <label>Search for a coin</label><br/>
            <input onChange={this.props.handleChange} autoComplete="off" type="text" name="name" placeholder="Bitcoin, Ethereum, Polkadot..." value={this.props.name} className="field"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default Search
