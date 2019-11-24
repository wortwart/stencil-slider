import { Component, Element, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'simple-slider',
  styleUrl: 'slider.scss',
  shadow: true
})
export class Slider {
	@Element() el: HTMLElement;
	@Prop() showStatus: boolean = false;
	@State() currentSlideNumber: number = 0;
	@State() slidesCount: number = 0;
	private sliderList: HTMLElement;
	private slideWidth: number = 0;
	private controls: object = {
		prev: null,
		next: null
	};

	componentDidLoad() {
		this.sliderList = this.el.shadowRoot.querySelector('ul');
		const slides = this.el.querySelectorAll('li');
		this.slidesCount = slides.length;
		this.slideWidth = (slides[0] as HTMLElement).offsetWidth;
		for (let type in this.controls)
			this.controls[type] = this.el.shadowRoot.querySelector('.btn_' + type);
		this.updateControls();
	}

	componentDidUpdate() {
		this.sliderList.style.transform = `translateX(${this.currentSlideNumber * this.slideWidth * -1}px)`;
		this.updateControls();
	}

	slide(amount: number = 1) {
		let slideTo = this.currentSlideNumber + amount;
		if (slideTo < 0 || slideTo >= this.slidesCount)
			return;
		this.currentSlideNumber = slideTo;
	}

	updateControls() {
		console.log(this.currentSlideNumber)
		this.switchControl('prev', (this.currentSlideNumber === 0)? false : true);
		this.switchControl('next', (this.currentSlideNumber === this.slidesCount - 1)? false : true);
	}

	switchControl(type: string, enabled: boolean) {
		console.log(type, enabled)
		if (this.controls[type])
			this.controls[type].disabled = !enabled;
	}

  render() {
    return (
      <figure>
				<button type="button" class="btn_next" onClick={this.slide.bind(this, 1)}>&gt;</button>
				<button type="button" class="btn_prev" onClick={this.slide.bind(this, -1)}>&lt;</button>
				<ul>
					<slot/>
				</ul>
				{this.showStatus && <figcaption>Slide {this.currentSlideNumber + 1}/{this.slidesCount}</figcaption>}
      </figure>
    );
  }

}
