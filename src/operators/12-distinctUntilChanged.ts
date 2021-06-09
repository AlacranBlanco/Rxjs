import {from, of} from "rxjs";
import {distinct, distinctUntilChanged} from "rxjs/operators";


const numero$ = of<number | string>(1, '1', 1, 1, 3, 3, 2, 2, 4, 4, 4, 5, 3, 1, 5);

numero$
    .pipe(
        distinctUntilChanged()
    )
    .subscribe(console.log)


interface Personaje {
    nombre: string;
    edad?: number;
}

const personajes: Personaje[] = [
    {nombre: 'Braulio', edad: 23},
    {nombre: 'Braulio', edad: 23},
    {nombre: 'Denisse'},
    {nombre: 'Braulio', edad: 24},
    {nombre: 'Denisse'},
    {nombre: 'io', edad: 12},
    {nombre: 'zero', edad: 43},
    {nombre: 'io', edad: 26},
]

from(personajes)
    .pipe(
        distinctUntilChanged((prev, curr) => prev.nombre === curr.nombre)
    )
    .subscribe(console.log)