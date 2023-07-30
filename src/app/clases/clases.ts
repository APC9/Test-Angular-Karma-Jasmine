export class Jugador{

  public hp: number = 100;

  recibeDanio(danio: number){

    if (danio >= this.hp){
      this.hp = 0
    }else{
      this.hp = this.hp - danio;
    }
    return this.hp;
  }
}





