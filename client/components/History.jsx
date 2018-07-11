import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class History extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      meetings: []
    }
  }

  componentDidMount(){
    this.setState({meetings: this.props.meetings})
  }

  render(){
    return (
      <div className="container">
        <h2 className="title is-2">Meeting history</h2>
        <div className="columns">
          <div className="column is-6">
          <h1 className="title is-2">Past Meetings</h1>
            <ul>
            {this.state.meetings && this.state.meetings.map(meeting => (
              <Link key={meeting.id}><li>{meeting.name}</li></Link>
            ))}
            </ul>
          </div>
          <div className="column is-6">
            <img src="http://via.placeholder.com/350x150" />
            <Link className="button is-large is-fullwidth is-success" to="/Meeting">Create New Meeting</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({meetings}) => {
  return {
    meetings
  }
}

export default connect(mapStateToProps)(History)
