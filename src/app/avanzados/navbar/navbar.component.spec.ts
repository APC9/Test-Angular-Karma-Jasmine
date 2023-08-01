import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { AppComponent } from 'src/app/app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Debe de tener un link a la pagina de medicos', ()=>{
    const elementos = fixture.debugElement.queryAll( By.directive(RouterLink) )

    const medicosLink = elementos.find( elemen => elemen.attributes['routerLink'] === '/medicos' )? true : false;
    expect(medicosLink).toBeTruthy()

  })
});
