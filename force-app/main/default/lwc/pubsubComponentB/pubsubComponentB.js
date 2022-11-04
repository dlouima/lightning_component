import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubComponentB extends LightningElement {
  connectedCallback(){
    this.calsubscriber()
  }
message

  calsubscriber(){
    pubsub.subscribe('componentA', (message) => {
      this.message = message
    })
  }
}