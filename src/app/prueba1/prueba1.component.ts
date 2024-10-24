import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prueba1',
  standalone: true,
  imports: [],
  templateUrl: './prueba1.component.html',
  styleUrl: './prueba1.component.css'
})
export class Prueba1Component {
  @Input() nombre: string = 'Mundo';
}
