import {fromEvent, range} from "rxjs";
import {map, mapTo, pluck} from "rxjs/operators";


// range(1, 5)
//     .pipe(
//         map<number, string>(val => {
//             return (val * 10).toString();
//         })
//     )
//     .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

keyupCode$.subscribe(res => console.log('map ', res))
keyupPluck$.subscribe(res => console.log('pluck ', res))
keyupMapTo$.subscribe(res => console.log('mapTo ', res))

