import { LightningElement, wire } from 'lwc';
import ID from '@salesforce/user/Id'
import { getRecord } from 'lightning/uiRecordApi';

export default class WireAdapterService extends LightningElement {
    userId= ID
    userDetails

    //005Dn0000022jamIAA

    @wire(getRecord, { recordId: '$userId', fields: ['User.Name', 'User.Email']})
    userDetailHandle({data, error}){
        if(data){
            this.userDetails= data.fields
        }
        if(error){
            console.log(error)}
    
    }


    @wire(getRecord, { recordId: '$userId', fields: ['User.Name', 'User.Email']})
    userDetailsProp
}