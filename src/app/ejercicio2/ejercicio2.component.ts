import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  horaActual: Date = new Date();
  private intervalo: any;

  // inicializamos el reloj
  ngOnInit() {
    this.iniciarReloj();
  }

  // iniciamos el reloj
  iniciarReloj() {
    // el método setInterval recibe una función y un tiempo en milisegundos
    this.intervalo = setInterval(() => {
      this.horaActual = new Date();
    }, 1000);
  }

  detenerReloj() {
    // limpiamos el intervalo
    clearInterval(this.intervalo);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

}
