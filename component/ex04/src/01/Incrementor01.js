import React, { Component } from 'react';

export default class extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: this.props.begin,
    };
  }

  onClickAddButton() {
    // this.state.value = this.state.value + this.props.step == render 안된다.
    this.setState({
      value: this.state.value + this.props.step,
    });
  }
  onClickSubButton() {
    // this.state.value = this.state.value + this.props.step == render 안된다.
    this.setState({
      value: this.state.value - this.props.step,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickAddButton.bind(this)}>
          <strong>+</strong>
        </button>{' '}
        <span>{this.state.value}</span>{' '}
        <button onClick={this.onClickSubButton.bind(this)}>
          <strong>-</strong>
        </button>
      </div>
    );
  }
}
