import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class NavigateHome extends  NavigationMixin(LightningElement){

  navigateRelatePage(){
    this[NavigationMixin.Navigate]({
      type: 'standard__webPage',
      attributes: {
        url: 'https://realcoderacademy.com/'

      }
    })

  }
}
