import { Component, h } from '@stencil/core';

@Component({
  tag: 'simple-slider',
  styleUrl: 'slider.scss',
  shadow: true
})
export class Slider {
	slide(amount: number = 1) {
		console.log(amount);
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
