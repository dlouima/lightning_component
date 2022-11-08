import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateHome extends  NavigationMixin(LightningElement)  {

  navigatetoAura(){
    this[NavigationMixin.Navigate]({
      type: 'standard__component',
      attributes: {
        componentName:'c__navigateAuraComponentTarget' ,


      },
      state:{
        'c__id':'7755885555455858'
      }
    })


  }
}
