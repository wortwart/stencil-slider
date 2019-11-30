import { r as registerInstance, h, g as getElement } from './core-822883bd.js';
var Slider = /** @class */ (function () {
    function Slider(hostRef) {
        registerInstance(this, hostRef);
        this.showStatus = false;
        this.currentSlideNumber = 0;
        this.slidesCount = 0;
        this.slideWidth = 0;
        this.controls = {
            prev: null,
            next: null
        };
    }
    Slider.prototype.componentWillLoad = function () {
        this.slides = this.el.querySelectorAll('li');
        this.slidesCount = this.slides.length;
    };
    Slider.prototype.componentDidLoad = function () {
        this.sliderList = this.el.shadowRoot.querySelector('ul');
        this.slideWidth = this.slides[0].offsetWidth;
        for (var type in this.controls)
            this.controls[type] = this.el.shadowRoot.querySelector('.btn_' + type);
        this.updateControls();
    };
    Slider.prototype.componentDidUpdate = function () {
        this.sliderList.style.transform = "translateX(" + this.currentSlideNumber * this.slideWidth * -1 + "px)";
        this.updateControls();
    };
    Slider.prototype.slide = function (amount) {
        if (amount === void 0) { amount = 1; }
        var slideTo = this.currentSlideNumber + amount;
        if (slideTo < 0 || slideTo >= this.slidesCount)
            return;
        this.currentSlideNumber = slideTo;
    };
    Slider.prototype.updateControls = function () {
        this.switchControl('prev', (this.currentSlideNumber === 0) ? false : true);
        this.switchControl('next', (this.currentSlideNumber === this.slidesCount - 1) ? false : true);
    };
    Slider.prototype.switchControl = function (type, enabled) {
        if (this.controls[type])
            this.controls[type].disabled = !enabled;
    };
    Slider.prototype.render = function () {
        return (h("figure", null, h("button", { type: "button", class: "btn_next", onClick: this.slide.bind(this, 1) }, ">"), h("button", { type: "button", class: "btn_prev", onClick: this.slide.bind(this, -1) }, "<"), h("ul", null, h("slot", null)), this.showStatus && h("figcaption", null, "Slide ", this.currentSlideNumber + 1, "/", this.slidesCount)));
    };
    Object.defineProperty(Slider.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider, "style", {
        get: function () { return "figure{position:relative;width:500px;margin:0 auto;overflow:hidden}ul{display:-ms-flexbox;display:flex;margin:0;padding:0;list-style:none;-webkit-transition:-webkit-transform .5s ease-in-out;transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out,-webkit-transform .5s ease-in-out}::slotted(li){-ms-flex:1 0 auto;flex:1 0 auto;width:500px;margin:auto;height:300px;background-color:#90ee90}::slotted(li:nth-child(2n)){background-color:#add8e6;height:400px}button{position:absolute;z-index:1;top:calc(50% - 32px);padding:20px;font-size:20px;line-height:20px;opacity:.5}button:hover{opacity:1;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}button[disabled],button[disabled]:hover{opacity:.25}button.btn_next{right:0}"; },
        enumerable: true,
        configurable: true
    });
    return Slider;
}());
export { Slider as simple_slider };
