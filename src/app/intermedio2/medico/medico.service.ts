import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  public http = inject(HttpClient)

  getMedicos(){
    return this.http.get('...')
  }

}
