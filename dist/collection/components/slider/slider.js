import { h } from "@stencil/core";
export class Slider {
    constructor() {
        this.showStatus = false;
        this.currentSlideNumber = 0;
        this.slidesCount = 0;
        this.slideWidth = 0;
        this.controls = {
            prev: null,
            next: null
        };
    }
    componentDidLoad() {
        this.sliderList = this.el.shadowRoot.querySelector('ul');
        const slides = this.el.querySelectorAll('li');
        this.slidesCount = slides.length;
        this.slideWidth = slides[0].offsetWidth;
        for (let type in this.controls)
            this.controls[type] = this.el.shadowRoot.querySelector('.btn_' + type);
        this.updateControls();
    }
    componentDidUpdate() {
        this.sliderList.style.transform = `translateX(${this.currentSlideNumber * this.slideWidth * -1}px)`;
        this.updateControls();
    }
    slide(amount = 1) {
        let slideTo = this.currentSlideNumber + amount;
        if (slideTo < 0 || slideTo >= this.slidesCount)
            return;
        this.currentSlideNumber = slideTo;
    }
    updateControls() {
        this.switchControl('prev', (this.currentSlideNumber === 0) ? false : true);
        this.switchControl('next', (this.currentSlideNumber === this.slidesCount - 1) ? false : true);
    }
    switchControl(type, enabled) {
        if (this.controls[type])
            this.controls[type].disabled = !enabled;
    }
    render() {
        return (h("figure", null,
            h("button", { type: "button", class: "btn_next", onClick: this.slide.bind(this, 1) }, ">"),
            h("button", { type: "button", class: "btn_prev", onClick: this.slide.bind(this, -1) }, "<"),
            h("ul", null,
                h("slot", null)),
            this.showStatus && h("figcaption", null,
                "Slide ",
                this.currentSlideNumber + 1,
                "/",
                this.slidesCount)));
    }
    static get is() { return "simple-slider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["slider.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["slider.css"]
    }; }
    static get properties() { return {
        "showStatus": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-status",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "currentSlideNumber": {},
        "slidesCount": {}
    }; }
    static get elementRef() { return "el"; }
}
