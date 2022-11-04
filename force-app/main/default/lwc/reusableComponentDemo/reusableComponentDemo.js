import { LightningElement } from 'lwc';

export default class ReusableComponentDemo extends LightningElement {


  handleSlotFooter(){
    const footerElem= this.template.querySelector('footer');
    if(footerElem){
      footerElem.classList.remove('slds-hide')
    }
  }
}