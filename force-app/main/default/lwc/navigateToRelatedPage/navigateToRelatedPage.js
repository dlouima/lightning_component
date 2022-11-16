import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class NavigateHome extends  NavigationMixin(LightningElement) {

  navigateRelatePage(){
    this[NavigationMixin.Navigate]({
      type: 'standard__recordRelationshipPage',
      attributes: {
        recordId: '001Dn000006ejbxIAA',
        objectApiName: 'Account',
        relationshipApiName: 'Contacts',
        actionName: 'view',

      }
    })
  }
}