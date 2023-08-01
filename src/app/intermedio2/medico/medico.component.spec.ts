import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MedicoComponent } from './medico.component'
import { MedicoService } from './medico.service';

describe('test in medico.component.ts', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;
  let servicio: MedicoService;

  beforeEach( ()=>{
    TestBed.configureTestingModule({
      declarations: [ MedicoComponent ],
      providers: [
        HttpClient, HttpHandler, MedicoService
    ]
    })

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
    servicio = fixture.debugElement.injector.get(MedicoService);
  })


  it('Debe de crearce el componente', ()=>{
    expect( component ).toBeTruthy()
  })

  it('SaludarMedico de contener el nombre', ()=>{
    const name = 'Alberto'
    const result = component.saludorMedico(name)
    expect( result ).toContain(name)
  })

})
