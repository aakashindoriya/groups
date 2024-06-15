import { ADD_GROUP, DELETE_GROUP, SET_GROUPS, SET_STATUS } from './actionTypes';

const initialState = {
  groups: [],
  status: []
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter((_, index) => index !== action.payload),
      };
    case SET_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default groupReducer;
