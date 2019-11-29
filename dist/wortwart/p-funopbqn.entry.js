import{r as t,h as s,g as i}from"./p-32a62914.js";const h=class{constructor(s){t(this,s),this.showStatus=!1,this.currentSlideNumber=0,this.slidesCount=0,this.slideWidth=0,this.controls={prev:null,next:null}}componentDidLoad(){this.sliderList=this.el.shadowRoot.querySelector("ul");const t=this.el.querySelectorAll("li");this.slidesCount=t.length,this.slideWidth=t[0].offsetWidth;for(let s in this.controls)this.controls[s]=this.el.shadowRoot.querySelector(".btn_"+s);this.updateControls()}componentDidUpdate(){this.sliderList.style.transform=`translateX(${this.currentSlideNumber*this.slideWidth*-1}px)`,this.updateControls()}slide(t=1){let s=this.currentSlideNumber+t;s<0||s>=this.slidesCount||(this.currentSlideNumber=s)}updateControls(){this.switchControl("prev",0!==this.currentSlideNumber),this.switchControl("next",this.currentSlideNumber!==this.slidesCount-1)}switchControl(t,s){this.controls[t]&&(this.controls[t].disabled=!s)}render(){return s("figure",null,s("button",{type:"button",class:"btn_next",onClick:this.slide.bind(this,1)},">"),s("button",{type:"button",class:"btn_prev",onClick:this.slide.bind(this,-1)},"<"),s("ul",null,s("slot",null)),this.showStatus&&s("figcaption",null,"Slide ",this.currentSlideNumber+1,"/",this.slidesCount))}get el(){return i(this)}static get style(){return"figure{position:relative;width:500px;margin:0 auto;overflow:hidden}ul{display:-ms-flexbox;display:flex;margin:0;padding:0;list-style:none;-webkit-transition:-webkit-transform .5s ease-in-out;transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out,-webkit-transform .5s ease-in-out}::slotted(li){-ms-flex:1 0 auto;flex:1 0 auto;width:500px;margin:auto;height:300px;background-color:#90ee90}::slotted(li:nth-child(2n)){background-color:#add8e6;height:400px}button{position:absolute;z-index:1;top:calc(50% - 32px);padding:20px;font-size:20px;line-height:20px;opacity:.5}button:hover{opacity:1;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}button[disabled],button[disabled]:hover{opacity:.25}button.btn_next{right:0}"}};export{h as simple_slider};