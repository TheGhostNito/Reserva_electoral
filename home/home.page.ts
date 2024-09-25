import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-home', // Cambia esto si el selector es diferente
  templateUrl: './home.page.html', // Asegúrate de que el nombre del archivo HTML coincida
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { } // Inyectar Router

  // Método para navegar a la página de configuración
  openSettings() {
    this.router.navigate(['/configuracion']); // Asegúrate de que la ruta sea la correcta
  }

  navigateToBeta() {
    this.router.navigate(['/beta']); // Si necesitas redirigir a la página Beta
  }

  openVotingLocation() {
    window.open('https://consulta.servel.cl', '_blank');
  }
  
}



