import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateHome extends  NavigationMixin(LightningElement) {


  navigateHome(){
    this[NavigationMixin.Navigate]({
      type: 'standard__namedPage',
      attributes: {
        pageName: 'home'
      }
    })

  }


  navigateToChatterPage(){
    this[NavigationMixin.Navigate]({
      type: 'standard__namedPage',
      attributes: {
        pageName: 'chatter'
      }
    })

  }
}
