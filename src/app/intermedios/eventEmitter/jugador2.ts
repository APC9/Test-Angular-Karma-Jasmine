import { EventEmitter } from '@angular/core';

export class Jugador2{

  public hp: number;
  public hpChange = new EventEmitter<number>();

  constructor(){
    this.hp = 100;
  }

  recibeDanio(danio: number){

    if (danio >= this.hp){
      this.hp = 0
    }else{
      this.hp = this.hp - danio;
    }
    this.hpChange.emit( this.hp );
  }
}





