import { Routes } from '@angular/router';

import { Clientes } from './Views/clientes/clientes';
import { Proveedores } from './Views/proveedores/proveedores';
import { Ventas } from './Views/ventas/ventas';
import { InventarioComponent } from './Views/inventario/inventario';
import { Login } from './listas/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'clientes', component: Clientes },
  { path: 'ventas', component: Ventas },
  { path: 'inventario', component: InventarioComponent },
  { path: 'proveedores', component: Proveedores },
];

