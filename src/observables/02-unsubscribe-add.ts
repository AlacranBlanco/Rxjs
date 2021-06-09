import {Observable, Observer} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Next: ', value),
    error: err => console.warn('Error: ', err),
    complete: () => console.log('Complete')
}

const intervalo$ = new Observable<number>(subscriber => {
    let contador = 0;
    const interval = setInterval(() => {
        subscriber.next(contador++);
        console.log(contador);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2)
    .add(subscription3)

setTimeout(() => {
    subscription1.unsubscribe();
    // subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('Completado timeout');
}, 3000)

