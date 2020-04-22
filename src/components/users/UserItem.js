import React, { Component } from 'react'

class UserItem extends Component {
  constructor(props) {
    super();
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    }
  }



  render() {
    return (
      <div className="card text-center">
        <img src={this.state.avatar_url} className="round-img" style={{
          width: '60px'
        }} />
        <h3>{this.state.login.toUpperCase()}</h3>
        <div>
          <a
          style={{
            borderRadius: '10px'
          }} href={this.state.html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
      </div>
    )
  }
}

export default UserItem
