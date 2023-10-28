// import { Observable, OperatorFunction, filter, interval, map, pipe, take, tap } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// function filterStreamValue<T>(
//     cb: (value: T) => boolean,
// // ): (stream$: Observable<T>) => Observable<T> {
// ): OperatorFunction<T, T> {
//     return (stream$: Observable<T>): Observable<T> => new Observable(subscriber => {
//         const subscription = stream$.subscribe({
//             next: value => {
//                 if (cb(value)) {
//                     subscriber.next(value);
//                 }
//             },
//             error: error => {
//                 subscriber.error(error);
//             },
//             complete: () => {
//                 subscriber.complete();
//             },
//         });

//         return () => {
//             subscription.unsubscribe();
//         }
//     });
// };

// const filterEven:(stream$: Observable<number>) => Observable<number> =
//     filterStreamValue<number>(value => value % 2 === 0);
// const filterEven = filter<number>(value => value % 2 === 0);

// const stream$ = interval(500);
// const evenStream$ = filterEven(stream$)

// evenStream$.subscribe(terminalLog);

// function stub(_: Observable<unknown>): Observable<string> {
//     return new Observable(subscriber => {
//         subscriber.next('Stup');
//         subscriber.complete();
//     })
// }

// const filterEven = filter<number>(value => value % 2 === 0);
// const double = map<number, number>(value => value * 2);

// const stream$ = interval(500);

// const filterEvenChildStream$ = filterEven(stream$);
// const doubleChildStream$ = double(filterEvenChildStream$);

// doubleChildStream$.subscribe(terminalLog);

// const resultStream$ = double(filterEven(stream$));

// function pipe<T, U>(
//     ...operators: Array<OperatorFunction<any, any>>
// ): OperatorFunction<T, U> {
//     return (source$: Observable<T>): Observable<U> => 
//         operators.reduce(
//             (prevChildStream$, operator) => operator(prevChildStream$) as any,
//             source$,
//         ) as unknown as Observable<U>
// }

// const stream$ = interval(500);
// const filterEven = filter<number>(value => value % 2 === 0);
// const double = map<number, number>(value => value * 2);

// const resultOperatorFunction$ = pipe<number, number>(
//     filterEven,
//     double,
// );

// const resultOperatorFunction$: OperatorFunction<number, number> = pipe(
//     filter<number>(value => value % 2 === 0),
//     map<number, number>(value => value * 2),
// );

// resultOperatorFunction$(stream$).subscribe(terminalLog);

// pipe(
//     filter<number>(value => value % 2 === 0),
//     map<number, number>(value => value * 2),
// )(stream$).subscribe(terminalLog);

// stream$.pipe(
//     filter<number>(value => value % 2 === 0),
//     take(4),
//     tap(console.log),
//     map<number, number>(value => value * 2),
// ).subscribe({
//     next: terminalLog,
//     complete: () => {
//         terminalLog('completed');
//     }
// });
