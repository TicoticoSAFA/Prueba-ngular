import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  tareas: string[] = [];

  agregarTarea() {
    const nuevaTarea = prompt('Agrega una tarea');
    if (nuevaTarea && nuevaTarea.trim()) {
      this.tareas.push(nuevaTarea.trim());
    }
  }


}
