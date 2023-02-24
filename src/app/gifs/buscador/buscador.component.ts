import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent {

  @ViewChild('txtBuscar') textBuscar!:ElementRef;

  buscar(){
    const valor = this.textBuscar.nativeElement.value;
    console.log(valor)
  }
}
