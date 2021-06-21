import './App.css';
import 'h8k-components';
import Slides from './components/Slides';

import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  prevSlide = () => {
    this.setState({ index: (this.state.index - 1) % this.props.slides.length });
  };

  nextSlide = () => {
    this.setState({ index: (this.state.index + 1) % this.props.slides.length });
  };

  resetSlides = () => [this.setState({ index: 0 })];

  render() {
    return (
      <div>
        <Slides
          prevSlide={this.prevSlide}
          nextSlide={this.nextSlide}
          resetSlides={this.resetSlides}
          slides={this.props.slides}
          initialState={this.initialState}
          index={this.state.index}
        />
      </div>
    );
  }
}
