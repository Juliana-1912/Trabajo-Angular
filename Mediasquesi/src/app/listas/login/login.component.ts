
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import Swal from 'sweetalert2';
import { LoginService } from '../../Services/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class Login {

  url = 'https://trabajo-angular-production.up.railway.app/api/v1/login';

  form: FormGroup;
  cargando = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.form = this.fb.group({
      user: ['', [
      Validators.required
]],

      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]]
    });
  }

  Loguear(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const usuario = this.form.controls['user'].value;
    const contrasena = this.form.controls['password'].value;

    const body = {
      usuario: usuario,
      contrasena: contrasena
    };

    this.cargando = true;

    this.loginService.login(this.url, body).subscribe({

      next: (respuesta: any) => {

        this.cargando = false;

        if (respuesta.success) {

          console.log('Acceso correcto');

          localStorage.setItem('user', usuario);

          Swal.fire({
            title: '¡Bienvenido!',
            text: 'Inicio de sesión exitoso',
            icon: 'success',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
          });

        } else {

          Swal.fire({
            title: 'Acceso denegado',
            text: 'Usuario o contraseña incorrectos',
            icon: 'error'
          });

        }
      },

      error: (error: any) => {

        this.cargando = false;

        console.error('Error de login:', error);

        Swal.fire({
          title: 'Error',
          text: 'No fue posible conectar con el servidor',
          icon: 'error'
        });

      }

    });

  }

}
