import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  segundos: number = 0;
  private intervalo: any;

  // inicializamos el reloj
  ngOnInit() {
    this.iniciarCuentaRegresiva();
  }

  // iniciamos la cuenta regresiva
  public iniciarCuentaRegresiva() {
    this.detenerCuentaRegresiva(); // Detenemos cualquier intervalo previo
    this.intervalo = setInterval(() => {
      if (this.segundos > 0) {
        this.segundos--;
      } else {
        this.detenerCuentaRegresiva();
      }
    }, 1000);
  }

  // detenemos la cuenta regresiva
  public detenerCuentaRegresiva() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

}
