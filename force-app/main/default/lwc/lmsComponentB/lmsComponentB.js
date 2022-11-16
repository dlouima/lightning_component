import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe } from 'lightning/messageService';


export default class LmsComponentB extends LightningElement {

  receiveMessage
  @wire(MessageContext)
  context

  connectedCallback(){
    this.subscribeMessage()
    console.log('message subscribed')
  }

  subscribeMessage(){
subscribe(this.context,SAMPLEMC, (message) =>{
   this.handleMessage(message)

  }, {scope: APPLICATION_SCOPE})


}

handleMessage(message){
  this.receiveMessage = message.lmsData.value? message.lmsData.value: 'No message published'

}
}