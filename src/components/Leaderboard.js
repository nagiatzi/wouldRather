import React from 'react';
import { connect } from 'react-redux';

const Leaderboard = ({ users, orderedIds }) => (
  <ul>
    {orderedIds && orderedIds.map(id => {
      const { name, avatarURL, questions, answers } = users[id]
      return (
        <li key={id} className='question'>
          <h3>{name}</h3>
          <div className='question__wrapper'>
            <img
              src={avatarURL}
              alt={`Avatar of ${name}`}
            />
            <div className='question__options'>
              <h2>Questions: {questions.length}</h2>
              <h2>Answers: {Object.keys(answers).length}</h2>
              <h2>Total: {questions.length + Object.keys(answers).length}</h2>
            </div>
          </div>
        </li>
      );
    })}
  </ul>
);

const mapStateToProps = ({ users }) => ({
  users,
  orderedIds: Object.keys(users)
    .sort((a,b) => (Object.keys(users[b].answers).length + users[b].questions.length)
      - (Object.keys(users[a].answers).length + users[a].questions.length))
})

export default connect(mapStateToProps)(Leaderboard);