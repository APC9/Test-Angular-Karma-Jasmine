import { message } from './string'

describe( 'Test in the string.ts', () => {


  it('should return a string', ()=>{

    const name = 'Alberto'
    const saludo = message(name)
    expect( saludo ).toEqual( `Saludos ${name}`)
    expect( typeof saludo ).toBe('string')
    expect( saludo ).toContain( name )
  })

  it('must contain the message sent as an argument', ()=>{
    const name = 'Alberto'
    const saludo = message(name)
    expect( saludo ).toContain( name )
  })

})
