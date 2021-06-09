import {fromEvent} from "rxjs";
import {map, takeWhile} from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        map(({x, y}) => ({x, y})),
        // takeWhile(({y}) => y <= 150) //No retorna el vamor que hizo detonar la validación
        takeWhile(({y}) => y <= 150, true) // El inclusive retorna el valor que hizo detornar la validación
    )
    .subscribe({
        next: value => console.log('next:', value),
        complete: () => console.log('complete')
    })