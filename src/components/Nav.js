
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setAuthedUser } from '../actions/authedUser';

const Nav = ({ authedUser, authedUserName, logOut }) => {

  const links = [
    ['/', 'Home'],
    ['/add', 'New Question'],
    ['/leaderboard', 'Leaderboard'],
  ]

  return (
    <div className='navigation'>
      <ul>

        {links.map(link => (
          <li key={link[1]}>
            <Link to={link[0]}>{link[1]}</Link>
          </li>
        ))}

        {authedUser
          ? <Fragment>
              <li className='right'>
                <Link to='/login' onClick={() => logOut()}>Logout</Link>
              </li>
              <li className='right'>{authedUserName}</li>
            </Fragment>
          : <li className='right'>
              <Link to='/login' >Login</Link>
            </li>
        }

      </ul>
    </div>
  )
}

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  authedUserName: authedUser && users[authedUser] ? users[authedUser].name : null
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(setAuthedUser(null))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);