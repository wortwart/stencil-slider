import { Component, h } from '@stencil/core';

@Component({
  tag: 'simple-slider',
  styleUrl: 'slider.scss',
  shadow: true
})
export class Slider {
	private currentSlideNumber: number = 0;
	private slidesCount: number = 0;

	componentDidLoad() {
		this.slidesCount = document.querySelectorAll('li').length;
	}

	slide(amount: number = 1) {
		let slideTo = this.currentSlideNumber + amount;
		if (slideTo < 0 || slideTo >= this.slidesCount)
			return;
		this.currentSlideNumber = slideTo;
		console.log(this.currentSlideNumber);
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
