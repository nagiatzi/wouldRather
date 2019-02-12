import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleAddQuestion } from '../actions/handleQuestion';

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
    redirect: false,
  };

  handleSubmit = e => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { addQuestion } = this.props;

    addQuestion(optionOneText, optionTwoText);

    this.setState({ redirect: true });
  }

  render() {

    const { avatarURL, name } = this.props;
    const { optionOneText, optionTwoText, redirect } = this.state;

    if (redirect) {
      return <Redirect to='/' />
    }

    return (
      <div className='question'>
        <h3>Would You Rather ...</h3>
        <div className='question__wrapper'>
          <img
            src={avatarURL}
            alt={`img of  ${name}`}
          />
          <form className='question--form' onSubmit={this.handleSubmit}>
            <textarea
              placeholder="Option One"
              value={optionOneText}
              onChange={e => this.setState({ optionOneText: e.target.value })}
              maxLength={50}
            />
            <h5>OR</h5>
            <textarea
              placeholder="Option Two"
              value={optionTwoText}
              onChange={e => this.setState({ optionTwoText: e.target.value })}
              maxLength={50}
            />
            <button
              type='submit'
              disabled={optionOneText === '' || optionTwoText === ''}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, users }) => ({
  authedUserName: users[authedUser].name,
  avatarURL: users[authedUser].avatarURL,
})
const mapDispatchToProps = dispatch => ({
  addQuestion: (one,two) => dispatch(handleAddQuestion(one,two))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);