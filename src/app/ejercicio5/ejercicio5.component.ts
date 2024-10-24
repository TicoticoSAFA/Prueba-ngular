import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ejercicio5.component.html',
  styleUrl: './ejercicio5.component.css'
})
export class Ejercicio5Component {
  comentario: string = '';
  comentarios: string[] = [];

  @Output() nuevoComentario = new EventEmitter<string>();

  enviarComentario() {
    if (this.comentario.trim()) {
      this.comentarios.push(this.comentario);
      this.nuevoComentario.emit(this.comentario);
      this.comentario = '';
    }
  }

}
