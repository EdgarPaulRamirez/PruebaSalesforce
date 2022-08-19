import { LightningElement } from 'lwc';
 
export default class HelloWorld extends LightningElement {
    Varibale = 'Hola Mundo';
    changeHandler(event) {
      this.Varibale = event.target.value;
    }
}