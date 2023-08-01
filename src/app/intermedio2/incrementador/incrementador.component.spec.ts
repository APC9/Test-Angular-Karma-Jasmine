import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IncrementadorComponent } from './incrementador.component';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la Leyenda', () => {
      component.leyenda = 'Progreso de carga';
      const element: HTMLElement = fixture.debugElement.query(By.css('h3') ).nativeElement;

      fixture.detectChanges()//disparar la deteccion de cambios
      expect(element.innerHTML ).toContain('Progreso de carga')
    });

    it('Debe de mostrar en el input el valor del progreso', ()=>{
      component.cambiarValor(5)

      fixture.detectChanges()

      //esperar a que todo el ciclo de deteccion de cambios de angular finalice para ejecutar los test
      fixture.whenStable().then( ()=> {
        const input = fixture.debugElement.query(By.css('input')).nativeElement
        expect(input.value ).toBe('55')
      })
    })

    it('debe de decrementar en 5, con un click en el boton', ()=>{
      const buttons = fixture.debugElement.queryAll(By.css('button'))
      buttons[0].triggerEventHandler('click', null )
      expect(component.progreso ).toBe(45)
    })

    it('debe de incrementar en 5, con un click en el boton', ()=>{
      const buttons = fixture.debugElement.queryAll(By.css('button'))
      buttons[1].triggerEventHandler('click', null )
      expect(component.progreso ).toBe(55)
    })

    it('El valor de Progreso debe de ser 45', ()=>{
      const progreso:HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

      component.cambiarValor(-5)
      fixture.detectChanges()
 
      expect(progreso.innerHTML ).toContain('45')
    })

});
