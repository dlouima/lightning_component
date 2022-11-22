import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class WireGetPicklistValueByRecordType extends LightningElement {

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo
    ratingOption
    industryOption

    @wire(getPicklistValuesByRecordType, {objectApiName: ACCOUNT_OBJECT, 
        recordTypeId:'$objectInfo.data.defaultRecordTypeId'})

    picklistHandler({data, error}){
        if(data){
            // console.log(data)
            this.ratingOption= this.generatePicklist(data.picklistFieldValues.Rating)
            this.industryOption= this.generatePicklist(data.picklistFieldValues.Industry)
        }
    }

    generatePicklist(data){
        return data.values.map(item => ({"label": item.label, 'value': item.value}))
    }

    handleChange(event){
        console.log(event.target.name + '==>' + event.target.value)
    }
}