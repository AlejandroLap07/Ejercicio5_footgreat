export class Triangulo{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static area (b, a){
        return (b * a)/2;
    }

    static perimetro (lado){
        return lado * 3;
    }
}