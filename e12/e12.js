class Triangulo{
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
console.log(Triangulo.area(10,5));
console.log(Triangulo.perimetro(10));