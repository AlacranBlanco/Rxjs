/*
* of = toma argumentos y genera un secuencia de valores
* form = arreglo, objetos, promesas, iterable
* */

import {from, of} from "rxjs";
import {map, tap} from "rxjs/operators";

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
};

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('Braulio')
// const source$ = of('Braulio')

const source$ = from(fetch('https://api.github.com/users/AlacranBlanco'));

const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterable = miGenerador();

/*
for (let val of iterable) {
    console.log(val);
}
*/

from(iterable).subscribe(observer);

// source$.subscribe(async (reps) => {
//     const data = await reps.json();
//     console.log(data);
// })
// source$.subscribe(observer);