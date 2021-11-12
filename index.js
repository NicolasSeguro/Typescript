/**
 * Let y Const
 */
var nombre;
nombre: 'Peter Parker';
var edad;
edad: 18;
var superHero = {
    nombre: nombre,
    edad: edad,
    poderes: ['Fuerza', 'Agilidad', 'Escalar']
};
/**
 * Clases
 */
var Escalar = /** @class */ (function () {
    function Escalar(treparVertical, treparHorizontal) {
        this.treparVertical = treparVertical;
        this.treparHorizontal = treparHorizontal;
    }
    Escalar.prototype.trepando = function () {
        return this.treparVertical * this.treparHorizontal;
    };
    ;
    return Escalar;
}());
