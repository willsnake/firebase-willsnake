import React, { Component } from 'react';

// Connect
import Connect from '../../utils/connect';

// Styles
import { HomeContainer } from './HomeStyles';

class Home extends Component {
  componentWillMount() {
    const {
      rdx: {
        action: { loadIndex }
      }
    } = this.props;
    loadIndex();
  }

  render() {
    const {
      rdx: {
        state: {
          home: { greet }
        }
      }
    } = this.props;
    return <HomeContainer>{greet}</HomeContainer>;
  }
}

let home = Connect(Home);
export default home;
