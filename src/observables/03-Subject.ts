import {Observable, Observer, Subject} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Next: ', value),
    error: err => console.warn('Error: ', err),
    complete: () => console.log('Complete')
}

const intervalo$ = new Observable<number>(subscriber => {
    const intervalID = setInterval(() => {
        subscriber.next(Math.random());
    }, 1000)
    // Este código se ejecutará hasta que llamemos un "unsubscribe"
    return () => {
        clearInterval(intervalID)
        console.log('Intervalo destruido');
    };
});

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const sub1 = intervalo$.subscribe(rnd => console.log('sub1: ', rnd));
// const sub2 = intervalo$.subscribe(rnd => console.log('sub2: ', rnd));

const sub1 = subject$.subscribe(observer);
const sub2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500)


