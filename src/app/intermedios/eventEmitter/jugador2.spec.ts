import { Jugador2 } from './jugador2';


describe(' test in Jugador2.ts', () => {

  let jugador: Jugador2;

  beforeEach( () => jugador = new Jugador2 )

  it('should emit an event when taking damage', ()=>{

    let newHp = 0;

    jugador.hpChange.subscribe( hp => newHp = hp )

    jugador.recibeDanio(1000);

    expect( newHp ).toBe(0)
  })

  it('should emit an event when taking damage and survive if the damage is less than 100', ()=>{

    let newHp = 0;

    jugador.hpChange.subscribe( hp => newHp = hp )

    jugador.recibeDanio(10);

    expect( newHp ).toBe(90)
  })

})
