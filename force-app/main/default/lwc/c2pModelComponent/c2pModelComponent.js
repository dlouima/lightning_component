import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {

  closeHandler(){
    const myEvent = new CustomEvent('close', {
      detail : 'Modal close successfully!'
    })
    this.dispatchEvent(myEvent)
  }
}