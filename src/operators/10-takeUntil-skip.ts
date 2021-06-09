import {fromEvent, interval} from "rxjs";
import {skip, takeUntil, tap} from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);
//const clickBtn$ = fromEvent(button, 'click');
const clickBtn$ = fromEvent(button, 'click').pipe(
    tap(() => console.log('Tap antes del click')),
    skip(1),
    tap(() => console.log('Tap despues del click'))
);

counter$
    .pipe(
        takeUntil(clickBtn$)
    )
    .subscribe({
        next: value => console.log('next:', value),
        complete: () => console.log('complete')
    })