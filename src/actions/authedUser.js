import { SET_AUTHED_USER } from './helper';

export function setAuthedUser(id) {
  localStorage.setItem('loggedUser', id)
  return {
    type: SET_AUTHED_USER,
    id
  }
};