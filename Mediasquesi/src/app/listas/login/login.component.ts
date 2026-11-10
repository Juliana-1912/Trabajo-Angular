import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../Services/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class Login {
  url = 'https://trabajo-angular-production.up.railway.app/api/v1/login';
  usuario = 'Juli';
  contrasena = '123456';
  mensaje = '';

  constructor(private loginService: LoginService) {}

  ingresar(): void {
    const body = {
      usuario: this.usuario,
      contrasena: this.contrasena,
    };

    this.loginService.login(this.url, body).subscribe({
      next: (respuesta: any) => {
        console.log(respuesta.success); // aquí sale true o false
        this.mensaje = respuesta.success ? 'Acceso correcto' : 'Acceso incorrecto';
      },
      error: (error: any) => {
        console.error('Error de login:', error);
        this.mensaje = 'Error al conectar con el servidor';
      },
    });
  }
}
