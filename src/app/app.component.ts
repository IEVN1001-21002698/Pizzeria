import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./tienda/formulario/formulario.component";
import { ClientesComponent } from "./tienda/clientes/clientes.component";
import { VentasComponent } from "./tienda/ventas/ventas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent, ClientesComponent, VentasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria';
}
