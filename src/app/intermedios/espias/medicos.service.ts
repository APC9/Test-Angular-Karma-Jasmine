import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable()
export class MedicosService {

  //public http = inject(HttpClient)
  constructor( public http: HttpClient ) { }

  getMedicos() {
    return this.http.get('...')
      .pipe(
        map( (resp:any) => resp['medicos'] )
      )
    }


  agregarMedico( medico: any ) {
    return this.http.post('...', medico )
      .pipe(
        map( (resp:any) => resp['medicos'] )
      );
  }

  borrarMedico( id: string ) {
    return this.http.delete('...' )
      .pipe(
        map( (resp:any) => resp['medicos'] )
      )
  }


}
