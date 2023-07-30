import { Jugador } from './clases'

describe( 'Pruebas de clases ', ()=>{

  const jugador = new Jugador();

  // beforeAll( ()=>{} ) antes de todas las pruebas
  beforeEach( ()=>{ jugador.hp = 100 } ) // antes de cada prueba

  // afterAll( ()=>{} ) despues de todas las pruebas
  // afterEach( ()=>{} ) despues de cada prueba

  it('debe de retorn 80 de hp si recibe 20 de daño', ()=>{
    const hp = jugador.recibeDanio(20);
    expect(hp).toBe(80 );
  })

  it('debe de retorn 50 de hp si recibe 50 de daño', ()=>{
    const hp = jugador.recibeDanio(50);
    expect(hp).toBe(50);
  })

  it('debe de retorn 0 de hp si recibe mas de 100 de daño', ()=>{
    const hp = jugador.recibeDanio(150);
    expect(hp).toBe(0);
  })

})



