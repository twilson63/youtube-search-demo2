import React from 'react'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      searchText: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({searchText: e.target.value})
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.onSearch(this.state.searchText)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.searchText}
          onChange={this.handleChange}
        />
        <button>Search</button>
      </form>
    )
  }
}

Search.propTypes = {
  onSearch: React.PropTypes.func.isRequired
}

export default Search
