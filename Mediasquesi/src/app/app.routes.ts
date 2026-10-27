import { Routes } from '@angular/router';
import { Clientes } from './Views/clientes/clientes';
import { Proveedores } from './Views/proveedores/proveedores';
import { Ventas } from './Views/ventas/ventas';
import { Inventario } from './Views/inventario/inventario';




export const routes: Routes = [
    {path:"clientes", component:Clientes},
    {path:"", component:Clientes},
    {path:"ventas", component:Ventas},
    {path:"inventario", component:Inventario},
    {path:"proveedores", component:Proveedores},
];
