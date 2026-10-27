import { Component } from '@angular/core';
import { ClientesService } from './clientes';

@Component({
  selector: 'app-clientes',
  imports: [],
  templateUrl: '../Views/clientes/clientes.html',
  styleUrl: '../Views/clientes/clientes.css',
})
export class Clientes {

constructor(public clientesService: ClientesService) {
this.clientesService.getClientes().subscribe((data:any[]) => {
console.log(data);

})
}
}