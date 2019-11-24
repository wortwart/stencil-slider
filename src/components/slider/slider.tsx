import { Component, Element, State, h } from '@stencil/core';

@Component({
  tag: 'simple-slider',
  styleUrl: 'slider.scss',
  shadow: true
})
export class Slider {
	@Element() el: HTMLElement;
	@State() currentSlideNumber: number = 0;
	private sliderList: HTMLElement;
	private slidesCount: number = 0;
	private slideWidth: number = 0;

	componentDidLoad() {
		this.sliderList = this.el.shadowRoot.querySelector('ul');
		const slides = this.el.querySelectorAll('li');
		this.slidesCount = slides.length;
		this.slideWidth = (slides[0] as HTMLElement).offsetWidth;
	}

	componentDidUpdate() {
		this.sliderList.style.transform = `translateX(${this.currentSlideNumber * this.slideWidth * -1}px)`;
	}

	slide(amount: number = 1) {
		let slideTo = this.currentSlideNumber + amount;
		if (slideTo < 0 || slideTo >= this.slidesCount)
			return;
		this.currentSlideNumber = slideTo;
	}

  render() {
    return (
      <figure>
				<button type="button" class="btn_next" onClick={this.slide.bind(this, 1)}>&gt;</button>
				<button type="button" class="btn_prev" onClick={this.slide.bind(this, -1)}>&lt;</button>
				<ul>
					<slot/>
				</ul>
				<p>Test!</p>
      </figure>
    );
  }

}
