import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';


export default class NavigateHome extends  NavigationMixin(LightningElement) {

  navigateToNewTab(){

    this[NavigationMixin.Navigate]({
      type: 'standard__navItemPage',
      attributes: {
      ApiName: 'L_Message_Services',

      }

    })
}
}
