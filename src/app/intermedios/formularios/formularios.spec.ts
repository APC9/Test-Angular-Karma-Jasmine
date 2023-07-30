import { FormBuilder } from '@angular/forms';
import { FormulariosRegister } from './formularios'

describe('test in Formularios.ts', () => {

  let componentes : FormulariosRegister;

  beforeEach( () => componentes  = new FormulariosRegister( new FormBuilder() ) )


  it('Debe de crear un formulario con 2 campos, email y password', ()=> {

    expect( componentes.form.contains('email') ).toBeTruthy()
    expect( componentes.form.contains('password') ).toBeTruthy()
  })

  it('El Campo email debe ser obligatorio', () => {
    const emailControl = componentes.form.get('email')

    // si no mando nada el correo debe de regresar falso
    emailControl?.setValue('')

    expect( emailControl?.valid ).toBeFalsy()
  })

  it('El Campo email debe regresar falso si el correo es invalido', () => {
    const emailControl = componentes.form.get('email')

    emailControl?.setValue('correo-invalido')

    expect( emailControl?.valid ).toBeFalsy()
  })

  it('El Campo email debe regresar verdadero si el correo es valido', () => {
    const emailControl = componentes.form.get('email')

    emailControl?.setValue('test@mail.com')

    expect( emailControl?.valid ).toBeTruthy()
  })

  it('El Campo contraseña debe regresar verdadero si el el minLength es mayor a 3', () => {
    const emailControl = componentes.form.get('password')

    emailControl?.setValue('123')

    expect( emailControl?.valid ).toBeTruthy()
  })

  it('El Campo contraseña debe regresar falso si el el minLength es menor a 3', () => {
    const emailControl = componentes.form.get('password')

    emailControl?.setValue('12')

    expect( emailControl?.valid ).toBeFalsy()
  })

})

