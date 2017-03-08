import React, { Component } from 'react'
import 'tachyons/css/tachyons.css'

import Search from './components/search'
import Videos from './components/videos'

import fetch from 'isomorphic-fetch'
import { path, map } from 'ramda'

const url = 'https://youtube-api.now.sh'
const code = 'codeisfun'
const transformToTripVideoFormat = (video) => {
  return ({
      id: video.id,
      title: video.title,
      url: video.thumbnails.high.url
  })
}
class App extends Component {
  constructor () {
    super()
    this.state = {
      videos: []
    }
    this.search = this.search.bind(this)
  }
  search (text) {
    fetch(`${url}/?q=${text}&code=${code}`)
      .then(res => res.json())
      .then(json => this.setState({ videos: map(transformToTripVideoFormat, json) }))
  }
  componentDidMount() {
    //this.search('peppa pig')
  }
  render() {
    return (
      <div className="pa4">
        <Search onSearch={this.search} />
        <Videos videos={path(['state', 'videos'], this)} />
      </div>
    );
  }
}

export default App;
