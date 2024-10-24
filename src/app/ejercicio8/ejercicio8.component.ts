import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-ejercicio8',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './ejercicio8.component.html',
  styleUrl: './ejercicio8.component.css'
})
export class Ejercicio8Component {
  productos = [
    { nombre: 'Libro', precio: 20, cantidad: 1 },
    { nombre: 'Lapiz', precio: 2, cantidad: 5 },
  ];

  precioTotal() {
    let total = 0;
    for (let producto of this.productos) {
      total += producto.precio * producto.cantidad;
    }
    return total;
  }

  suma1producto(producto: any) {
    let id:number = this.productos.indexOf(producto);
    this.productos[id].cantidad++;
    this.precioTotal();
  }

  resta1producto(producto: any) {
    let id:number = this.productos.indexOf(producto);
    this.productos[id].cantidad--;
    this.precioTotal();
  }






}
