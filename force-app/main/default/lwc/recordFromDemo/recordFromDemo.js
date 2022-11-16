import { LightningElement, api } from 'lwc';
import  ACCOUNT_OBJECT from '@salesforce/schema/Account'
import  NAME_FIELD from '@salesforce/schema/Account.Name'
import  ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import  TYPE_FIELD from '@salesforce/schema/Account.Type'
import  INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import  {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class RecordFromDemo extends LightningElement {

    @api recordId
    @api objectName
    objectName= ACCOUNT_OBJECT
    fieldList= [NAME_FIELD, ANNUAL_REVENUE_FIELD, TYPE_FIELD, INDUSTRY_FIELD]



    onsuccessHandle(evernt){
        console.log(evernt.detail.id)
        const toastEvent = new ShowToastEvent({
            title: 'Account created',
            message:  'Record Id '+ event.detail.id,
            variant: "success"
        })
        this.dispatchEvent(toastEvent)


    }
}