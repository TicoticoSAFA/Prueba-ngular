import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio7',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ejercicio7.component.html',
  styleUrl: './ejercicio7.component.css'
})
export class Ejercicio7Component {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = this.num1 + this.num2;
  }

  restar(): void {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar(): void {
    this.resultado = this.num1 * this.num2;
  }

  dividir(): void {
    if (this.num2 == 0) {
      alert("No se puede dividir por 0");
      return;
    } else {
      this.resultado = this.num1 / this.num2;
    }
  }

  raizCuadrada(): void {
    if (this.num1 < 0) {
      alert("No se puede calcular la raíz cuadrada de un número negativo");
      return;
    }else{
      this.resultado = Math.sqrt(this.num1);
    }
  }
}
