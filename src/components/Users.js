import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
import connect from "react-redux";
>>>>>>> 0347e31cba5334a77228c366a19f96d083a8a3d5

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
<<<<<<< HEAD
          {users}
=======
          Users!
          {
            this.state.users.map(user => {
              <li>{ user }</li>
            })
          }
          <li>{ this.state.userCount }</li>
>>>>>>> 0347e31cba5334a77228c366a19f96d083a8a3d5
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
<<<<<<< HEAD
    numberOfUsers: state.users.length
  };
};

export default connect(mapStateToProps)(Users)
=======
    userCount: state.userCount
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
>>>>>>> 0347e31cba5334a77228c366a19f96d083a8a3d5
