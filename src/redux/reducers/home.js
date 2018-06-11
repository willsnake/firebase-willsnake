import { handleActions } from 'redux-actions';

export const initialState = {
  greet: 'Greetings!'
};

export const home = handleActions(
  {
    LOAD_INDEX: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      return state;
    },
    SET_GREET: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.greet = action.payload;
      return state;
    }
  },
  initialState
);
