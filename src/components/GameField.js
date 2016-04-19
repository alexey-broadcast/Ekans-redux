import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { COLOR, refs } from 'helpers/const';

@connect(
  state => ({
    snakeHead: state.snakeHead,
    snake: state.snake,
    fieldSize: state.fieldSize,
  }),
  dispatch => bindActionCreators({ }, dispatch),
)
export default class GameField extends Component {

  static propTypes = {

    // from global.state
    snakeHead: PropTypes.array.isRequired,
    snake: PropTypes.array.isRequired,
    fieldSize: PropTypes.number.isRequired,

    // actions
    // decrement: PropTypes.func.isRequired,
  };

  componentDidMount() { this.drawSnake(); }
  componentDidUpdate() { this.drawSnake(); }

  getContext = () => findDOMNode(this).getContext('2d');

  getCanvasSize = () => window.innerWidth / 2;

  drawSnake() {
    console.log('drawSnake');
    const { fieldSize, snake } = this.props;
    const rectSize = this.getCanvasSize() / fieldSize;

    const context = findDOMNode(this).getContext('2d');
    context.fillStyle = COLOR.SNAKE;

    snake.forEach((item) => {
      const _x = item.x * rectSize;
      const _y = item.y * rectSize;
      const _bodySize = rectSize - 2;
      context.fillRect(_x + 1, _y + 1, _bodySize, _bodySize);
    });
  }

  render() {
    const canvasWidth = this.getCanvasSize();
    return (
      <canvas
        ref={refs.canvas}
        width={ canvasWidth }
        height={ canvasWidth }
        style={{ backgroundColor: COLOR.BACKGROUND }}
      />
    );
  }
}
