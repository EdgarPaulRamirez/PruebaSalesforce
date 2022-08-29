import { LightningElement, api } from 'lwc';

export default class UsandoAtributoApi extends LightningElement {
    //Uso del componente 
    @api specieapi //Las propiedades api son propiedades api las cuales se espera que sean rellenadas por quien vaya utilizar el componente.
                //o por los componentes que vayan a hacer uso de este componente (componente -> especiesList)
                
                //Este esta referenciado en el html del componente especiesList.html en donde se define que va a contener
                //En este caso, vamos a rellenar este componente utilizando los valores del componente especiesList.html el cual hace la iteracion
                //del objeto "Species", con @API indicamos solo un atributo que recibe todo lo que
}