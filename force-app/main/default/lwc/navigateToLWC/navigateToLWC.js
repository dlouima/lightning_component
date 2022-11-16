import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';


export default class NavigateHome extends  NavigationMixin(LightningElement)  {

  navigatetoLwc(){
    var definition ={
      componentDef: 'c:navigateComponentTarget'

    }
    this[NavigationMixin.Navigate]({
      type: 'standard__webPage',
      attributes: {
        url: '/one/one.app#' + btoa(JSON.stringify(definition)),

      }
    })

  }
}