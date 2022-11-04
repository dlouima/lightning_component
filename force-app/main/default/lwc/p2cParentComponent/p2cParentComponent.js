import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
  carouselDate= [
    {
      src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
      header:"First Card",
      description:"First card description.",
    },
    {
      src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
      header:"Sedond Card",
      description:"Second card description.",
    },
    {
      src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
      header:"Third Card",
      description:"Third card description.",
    }
  ]

  progressDetail =10

  progressHandler(event){
  this.progressDetail = event.target.value
  }
  handleClick(event){
    this.template.querySelector('c-p2c-slider-component').resetSlider();
    console.log(document.querySelector('c-p2c-slider-component').resetSlider())
  }

}