import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class NavigateHome extends  NavigationMixin(LightningElement) {

  navigateToRecordPage(){
    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: {
        recordId: '003Dn000004dZquIAE',
        objectApiName: 'Contact',
        actionName: 'view',

      }
    })

  }

  navigateToRecordEditMode(){
    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: {
        recordId: '003Dn000004dZquIAE',
        objectApiName: 'Contact',
        actionName: 'edit',

      }
    })

  }

}