import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject, from } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigate( params:any ){

  }
}

class FakeActivatedRoute {
  params: Observable<any> = EMPTY
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter},
        { provide: ActivatedRoute, useClass: FakeActivatedRoute}
      ]
    });
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a medico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123'])
  });

 /*  it('Debe de colocar el id === nuevo', ()=>{
    const activatedRoute:FakeActivatedRoute = TestBed.inject( ActivatedRoute )
    expect(component.id).toBe('nuevo')
  }) */
});
