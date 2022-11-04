import { LightningElement } from 'lwc';
import id from '@salesforce/user/Id'
import isguet from '@salesforce/user/isGuest'

export default class UserInformation extends LightningElement {
  userId= id
  isGuest= isguet
}
