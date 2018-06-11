import { connect } from 'react-redux';
import * as actions from '../redux/actions';

const actionsKeys = Object.keys(actions);

const mapDispatchToProps = dispatch => {
  const dispatchActions = {};
  actionsKeys.forEach(a => {
    const action = actions[a];

    dispatchActions[a] = (...args) => {
      if (action.name === 'factory') {
        return action(...args)(dispatch);
      }
      dispatch(action(...args));
    };
  });
  return dispatchActions;
};

const Connect = connect(
  state => state,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => ({
    rdx: {
      state: stateProps,
      action: dispatchProps
    },
    ...ownProps
  })
);

export default component => Connect(component);
