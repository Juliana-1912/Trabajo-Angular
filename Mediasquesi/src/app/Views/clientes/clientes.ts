import { Component } from '@angular/core';
import { ClientesService } from '../../Services/clientes';
 
@Component({
  selector: 'app-clientes',
  imports: [],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
 
constructor(public clientesService: ClientesService) {
this.clientesService.getClientes().subscribe((data:any[]) => {
console.log(data);
 
})
}
}
 