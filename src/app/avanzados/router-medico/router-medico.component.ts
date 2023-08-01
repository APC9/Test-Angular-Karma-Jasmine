import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: [
  ]
})
export class RouterMedicoComponent implements OnInit {

  public id?: string;
  public router = inject(Router);
  public activateRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe( params => {
        next: () => this.id = params['id'];
      })
  }

  guardarMedico(){
    this.router.navigate(['medico', '123'])
  }

}
