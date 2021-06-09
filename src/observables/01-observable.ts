import {Observable, Observer} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: err => console.error('Error [obs]: ', err),
    complete: () => console.info('Complete [obs]')
}

//const obs$ = Observable.create()
const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hello friend');
    subscriber.next('Hello world');

    // Forzar el error
    // const a = undefined;
    // a.nombre = 'Braulio'

    subscriber.complete();

    subscriber.next('Hello friend');
    subscriber.next('Hello world');
});

// obs$.subscribe(observer);

/*
obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.error('error: ', error),
    () => console.log('Complete')
);*/


