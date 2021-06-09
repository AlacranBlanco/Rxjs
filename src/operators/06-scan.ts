import {from} from "rxjs";
import {map, reduce, scan} from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

// const totalAcum = (acc, curr) => {
//     return acc + curr;
// }

const totalAcum = (acc, curr) => acc + curr;

// Reduce
from(numeros)
    .pipe(
        reduce(totalAcum, 0)
    )
    .subscribe(console.log)

// Scan
from(numeros)
    .pipe(
        scan(totalAcum, 0)
    )
    .subscribe(console.log)

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'brau', autenticado: false, token: null},
    {id: 'brau', autenticado: true, token: 'ABC', edad: 24},
    {id: 'brau', autenticado: true, token: 'ABC123', edad: 25},
];

const state$ = from(user)
    .pipe(
        scan<Usuario>((acc, curr) => {
            return {...acc, ...curr};
        }, {edad: 23})
    );

const id$ = state$.pipe(
    map(state => state)
)

id$.subscribe(console.log);