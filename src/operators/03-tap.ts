import {range} from "rxjs";
import {map, tap} from "rxjs/operators";


const numero$ = range(1, 5);


numero$
    .pipe(
        tap(x => {
            console.log('antes', x)
            return 100;
        }),
        map(val => val * 10),
        tap({
            next: val => console.log('despues', val),
            complete: () => console.log('Se terminó todo')
        })
    )
    .subscribe(val => console.log('subs', val))