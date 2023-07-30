
import { EMPTY, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    let servicio: MedicosService;

    beforeEach( () => {
      TestBed.configureTestingModule({
        providers: [
            HttpClient, HttpHandler, MedicosService
        ]
      });

      const fixture = TestBed.createComponent(MedicosComponent)
        componente = fixture.componentInstance
        servicio = fixture.debugElement.injector.get(MedicosService)

    });


    it('Init: debe de cargar los medicos', () => {

      const medicos = [ 'medico1', 'medico2', 'medico3']

      spyOn( servicio, 'getMedicos' ).and.callFake( () => {
        return from([medicos])
      });

      componente.ngOnInit()
      expect( componente.medicos.length ).toBeGreaterThan(0)
    });

    it('Debe de llamar al servidor para agregar un medico', ()=>{
      const spia = spyOn( servicio, 'agregarMedico' ).and.callFake( () => EMPTY )

      componente.agregarMedico()
      expect( spia ).toHaveBeenCalled()
    })


    it('Debe de agregar un nuevo medico al arreglo de medico', ()=>{
      const medico = { id: 1, name: 'juan'}
      spyOn( servicio, 'agregarMedico' )
        .and.returnValue( from( [ medico ] ) )

      componente.agregarMedico()
      expect( componente.medicos ).toContain(medico)
    })


    it('si componente.agregarMedico(), la propiedad msjError debe ser igual al error del servicio', ()=>{
      const myErr  = 'Error en agregarMedico'

      spyOn( servicio, 'agregarMedico' )
        .and.returnValues( throwError( () => new Error(myErr) )
        )

      componente.agregarMedico()
      expect( componente.mensajeError ).toBe(myErr)
    })

    it('debe de llamar al servidor para borrar un medico', ()=>{

      spyOn( window, 'confirm' ).and.returnValue(true)

      const spia = spyOn( servicio, 'borrarMedico' ).and.callFake( () => EMPTY )

      componente.borrarMedico('123')
      expect( spia ).toHaveBeenCalledWith('123')
    })

    it('NO debe de llamar al servidor para borrar un medico', ()=>{

      spyOn( window, 'confirm' ).and.returnValue(false)

      const spia = spyOn( servicio, 'borrarMedico' ).and.callFake( () => EMPTY )

      componente.borrarMedico('123')
      expect( spia ).not.toHaveBeenCalled()
    })

});
