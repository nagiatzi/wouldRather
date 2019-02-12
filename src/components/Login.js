import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  state = {
    redirect: false,
  }

  handleClick(id) {
    this.props.logIn(id)
    this.setState({ redirect: true })
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    const { users } = this.props

    return (
      <ul className='login__list'>
        {Object.keys(users).map(id => {
          const { avatarURL, name } = users[id]
          return (
            <li key={id}>
              <img
                src={avatarURL}
                alt={`Avatar of ${name}`}
              />
              <p>{name}</p>
              <button
                onClick={() => this.handleClick(id)}>
                Login with {id}
              </button>
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })
const mapDispatchToProps = dispatch => ({
  logIn: id => dispatch(setAuthedUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)