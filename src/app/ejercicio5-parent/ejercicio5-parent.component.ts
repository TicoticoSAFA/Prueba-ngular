import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {Ejercicio5Component} from '../ejercicio5/ejercicio5.component';

@Component({
  selector: 'app-ejercicio5-parent',
  standalone: true,
  imports: [
    NgForOf,
    Ejercicio5Component
  ],
  templateUrl: './ejercicio5-parent.component.html',
  styleUrl: './ejercicio5-parent.component.css'
})
export class Ejercicio5ParentComponent {
  comentarios: string[] = [];

  manejarNuevoComentario(comentario: string) {
    this.comentarios.push(comentario);
  }

}
