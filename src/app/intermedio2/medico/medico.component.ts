import { Component, inject } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent {

  public medicos: any[] = [];
  public medicoService = inject(MedicoService)

  saludorMedico( name: string){
    return `hola ${name}`
  }

  obtenerMedicos(){
    this.medicoService.getMedicos()
      .subscribe({
        next: (resp: any ) => this.medicos = resp,
        error: (err: any) => err.message
      })
  }
}
