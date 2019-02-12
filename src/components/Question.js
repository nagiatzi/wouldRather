import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleSaveQuestionAnswer } from '../actions/handleQuestion';

class Question extends Component {

  state = {
    option: 'none',
    showAlert: false,
  };

  handleChange(e) {
    this.setState({
      option: e.target.value,
      showAlert: false,
    })
  };

  handleSubmit(e) {
    e.preventDefault()

    const { option } = this.state;
    const { dispatch, question } = this.props;

    this.state.option === 'none'
      ? this.setState({ showAlert: true })
      : dispatch(handleSaveQuestionAnswer(question.id, option))
  }

  render() {
    const { author, question } = this.props;

    return (
      <div className='question'>
        <h3>{author.name} Asks:</h3>
        <div className='question__wrapper'>
          <img
            src={author.avatarURL}
            alt={`Avatar of ${author}`}
          />
          <div className='question--form'>
            <h2>Would You Rather</h2>
            <form
              onChange={e => this.handleChange(e)}
              onSubmit={e => this.handleSubmit(e)}>
              <div>
                <input type='radio' name='choice' value='optionOne' />
                <span>{question.optionOne.text}</span>
              </div>
              <div>
                <input
                  type='radio' name='choice' value='optionTwo' />
                <span>{question.optionTwo.text}</span>
              </div>
              {this.state.showAlert && <h4>No option selected, please choose one</h4>}
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Question);