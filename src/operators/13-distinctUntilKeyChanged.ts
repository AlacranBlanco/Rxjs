import {from} from "rxjs";
import {distinctUntilChanged, distinctUntilKeyChanged} from "rxjs/operators";


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
        distinctUntilKeyChanged('nombre')
    )
    .subscribe(console.log)