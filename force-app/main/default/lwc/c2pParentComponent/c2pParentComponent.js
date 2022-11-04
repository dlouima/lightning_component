import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {

  showModal =false
   msg
  clickHandler(){
this.msg = ''
    this.showModal =true
  }
  closeEvent(event){
this.msg= event.detail
    this.showModal= false
  }
}