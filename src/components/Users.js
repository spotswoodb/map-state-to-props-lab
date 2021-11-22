import React, { Component } from 'react';
import { connect } from "react-redux"
// add any needed imports here
class Users extends Component {

  render() {
    const users = this.props.users.map((u, i) => <li key={i}>{u.username}</li>)

    return (
      <div>
        <ul>
          Users!
          <ul>
            {users}
          </ul>
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
