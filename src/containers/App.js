import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement } from 'redux/reducer';

@connect(
  state => ({
    counter: state.counter,
  }),
  dispatch => bindActionCreators({ increment, decrement }, dispatch),
)
export default class App extends Component {

  static propTypes = {

    // from global.state
    counter: PropTypes.number.isRequired,

    // actions
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  constructor(props) {
    console.log('App constructor');
    super(props);
  }

  componentDidMount() {
    console.log('App componentDidMount');
    console.log(this.props.counter);
  }

  render() {
    console.log('App render');
    return (
      <div>
        {this.props.counter}
        <br />
        <button onClick={this.props.increment} >INC</button>
        <br />
        <button onClick={this.props.decrement} >DEC</button>
      </div>
    );
  }
}
