import { LightningElement , api } from 'lwc';

export default class AlertComponent extends LightningElement {
  @api message
  @api childHeader
  @api number
  @api isValid
}