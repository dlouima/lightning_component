import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'

export default class WireListUIDemo extends LightningElement {
    contacts = []
    pageToken = null
    nextPageToken = null
    previousPageToken =null

    @wire(getListUi, {objectApiName: CONTACT_OBJECT,
        listViewApiName: 'AllContacts',
        pageSize: 10,
        sortBy: TITLE_FIELD,
        pageToken: '$pageToken'

    
    })
    listViewHandler({data}){
        if(data){
            // console.log(data)
            this.contacts = data.records.records
            console.log('hello')
            this.nextPageToken= data.records.records.nextPageToken
            this.previousPageToken = data.records.records.previousPageToken
        }
    }

    handlePrevious(event){
        this.pageToken = this.previousPageToken

    }

    handleNext(event){
        this.pageToken = this.nextPageToken

    }
}