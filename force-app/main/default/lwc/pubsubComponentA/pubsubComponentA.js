import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubComponentA extends LightningElement {
message
  inputHandler(event){

    this.message = event.target.value
    console.log(message)
  }

  publishHandler(){
    pubsub.publish('componentA', this.message

    )

  }
}