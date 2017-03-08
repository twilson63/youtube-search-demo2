import React from 'react'
import { map } from 'ramda'

class Videos extends React.Component {

  render() {
    const card = (video) => {
      return (
        <div key={video.id}>
          <h1>{video.title}</h1>
          <img src={video.url} />
        </div>
      )
    }
    return (
      <div>
        { map(card, this.props.videos) }
      </div>
    )
  }
}

Videos.propTypes = {
  videos: React.PropTypes.array.isRequired
}

export default Videos
