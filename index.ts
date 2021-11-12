/**
 * Let y Const 
 */

let nombre: string; 
nombre: 'Peter Parker';
let edad: number;
edad: 18;

const superHero = {
    nombre: nombre,
    edad: edad,
    poderes: ['Fuerza', 'Agilidad', 'Escalar']
};

/**
 * Interface
 */

interface spiderMan {
    poderes: string[];
}

/**
 * Clases
 */

class Escalar {
    treparVertical: number;
    treparHorizontal: number;

    trepando():number{
        return this.treparVertical*this.treparHorizontal
    };
    
    constructor (treparVertical: number, treparHorizontal: number) {
        this.treparVertical = treparVertical;
        this.treparHorizontal = treparHorizontal;
    }
}