import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';


export default class NavigateHome extends  NavigationMixin(LightningElement) {

    navigateVFpage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
            url: '/apex/lmsVisualForceDemo'      
            }
      
          }).then( generateUrl => {
            window.open(generateUrl)
          })

    }
}