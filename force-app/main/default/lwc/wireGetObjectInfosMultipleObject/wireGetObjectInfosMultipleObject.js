import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import {getObjectInfos} from 'lightning/uiObjectInfoApi'
import  OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class WireGetObjectInfosMultipleObject extends LightningElement {
    objectApiNames= [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]
    objectInfos
    @wire(getObjectInfos, {objectApiNames: '$objectApiNames' })    
    objectInfo({data}){
    if(data){
        
        this.objectInfos = data
    }

    }
}