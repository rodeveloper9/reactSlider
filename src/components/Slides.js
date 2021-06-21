import React, { Component } from 'react';

export default class Slides extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  imgSlides = () => {
    const { slides = [] } = this.props;
    slides.map((num) => {
      return (
        <div className="sliderImg">
          <h1 data-testid='title'>{num.title}</h1>
          <p data-testid='text'>{num.text}</p>
        </div>
      )
    })
  }

  render() {
    console.log('props ==>', this.props)
    const { slides = [],index=0, nextSlide, prevSlide, resetSlides } = this.props;
    const indexFilter = slides.filter((item,key) => key === index);
    return (
      <div className="sliderContainer">
        <div className="btnContainer">
          <button className="slideBtn" data-testid="button-restart" onClick={() => resetSlides()} disabled={index === 0 ? true: false}>Restart</button>
          <button className="slideBtn" data-testid="button-prev" onClick={() => prevSlide()} disabled={index === 0 ? true: false}>Prev</button>
          <button className="slideBtn" data-testid="button-next" onClick={() => nextSlide()} disabled={index === (slides.length - 1) ? true : false}>Next</button>
        </div>
        <div className="sliders">
          {
            indexFilter.map((num, key) => {
              return (
                <div className="sliderImg" key={key}>
                  <h1 data-testid='title'>{num.title}</h1>
                  <p data-testid='text'>{num.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}
