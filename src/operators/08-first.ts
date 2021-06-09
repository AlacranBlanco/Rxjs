import {fromEvent} from "rxjs";
import {first, map, take, tap} from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        tap<MouseEvent>(console.log),
        map(({clientX, clientY}) => ({
            clientX,
            clientY
        })),
        first(event => event.clientX >= 150)
    )
    .subscribe({
        next: value => console.log('next:', value),
        complete: () => console.log('complete')
    })