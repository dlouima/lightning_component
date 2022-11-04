import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {

  val= 20

  handleClick(event){
    this.val= event.tartget.value
  }

  @api resetSlider(){
    this.val= 50
    console.log(this.val)
  }
}