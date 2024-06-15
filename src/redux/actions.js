import { ADD_GROUP, DELETE_GROUP, SET_GROUPS, SET_STATUS } from './actionTypes';

export const addGroup = (from, to) => ({
  type: ADD_GROUP,
  payload: { from, to }
});

export const deleteGroup = (index) => ({
  type: DELETE_GROUP,
  payload: index
});

export const setGroups = (groups) => ({
  type: SET_GROUPS,
  payload: groups
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: status
});
