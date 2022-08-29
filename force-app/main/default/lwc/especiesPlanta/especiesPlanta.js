import { LightningElement } from "lwc";

export default class EspeciesPlanta extends LightningElement {
  species =
    {
      nombre: "Rosa",
      descripcion:"Conserva un tallo con espinas y es de color roja por lo regular",
      url: "https://static.vecteezy.com/system/resources/previews/002/410/224/original/red-rose-cartoon-style-on-a-white-background-free-vector.jpg"
    }

  //Seccion del card:

  //Sección del acordión - Activar la seccionC con el primer botton -
  activeSectionMessage = ""; //Mensaje utilizado en esta clase para mostrar que seccion del acordion esta abierto

  MostrarCualSeccionEstaAbierta(event) {
    this.activeSectionMessage =
      "La sección abierta es:  " + event.detail.openSections; //Obtenemos la seccion abierte por medio de "OpenSection"
  }

  AbrirSeccionC() {
    //Funcionamiento del boton 'lightning-button'.
    const accordion = this.template.querySelector(".example-accordion"); //referencia al dom con el atributo del html llamado accordion

    accordion.activeSectionName = "C"; //El 'activeSectionName' -> es una palabra reservada que hacer referencia al html, Debes saber que este hace referencia al valor
    //'active-section-name="c"' que se encuentra definido en el html cuando se establecen los valores del acordión
  }
}
