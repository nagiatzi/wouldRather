
import {
    RECEIVE_USERS,
    ADD_QUESTION_TO_USER,
    SAVE_QUESTION_ANSWER_TO_USER,
  } from './helper';
  
  export function receiveUsers(users) {
    return {
      type: RECEIVE_USERS,
      users,
    }
  };
  
  export function addQuestionToUser(authedUser, id) {
    return {
      type: ADD_QUESTION_TO_USER,
      authedUser,
      id,
    }
  };
  
  export function saveQuestionAnswerToUser(authedUser, id, answer) {
    return {
      type: SAVE_QUESTION_ANSWER_TO_USER,
      authedUser,
      id,
      answer,
    }
  };