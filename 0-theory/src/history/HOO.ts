// import { Observable, OperatorFunction, Subscription, concatMap, exhaustMap, filter, interval, map, mergeAll, mergeMap, of, pipe, switchMap, take, tap } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // const stream$ = interval(500).pipe(
// //     // map(() => interval(1000)),
// //     // mergeAll(),
// //     mergeMap(
// //         index => interval(1000).pipe(
// //             take(6),
// //             tap({
// //                 next: value => {
// //                     console.log(`Index ${index} - ${value}`)
// //                 },
// //                 complete: () => {
// //                     console.log('completed');
// //                 }
// //             }),
// //         ),
// //         1,
// //     ),
// // );

// // const stream$ = interval(500).pipe(
// //     // map(() => interval(1000)),
// //     // mergeAll(),
// //     concatMap( // concatMap(...) ~ mergeMap(..., 1)
// //         index => interval(1000).pipe(
// //             take(6),
// //             tap({
// //                 next: value => {
// //                     console.log(`Index ${index} - ${value}`)
// //                 },
// //                 complete: () => {
// //                     console.log('completed');
// //                 }
// //             }),
// //         ),
// //     ),
// // );

// // const stream$ = interval(500).pipe(
// //     // map(() => interval(1000)),
// //     // mergeAll(),
// //     switchMap(
// //         index => interval(100).pipe(
// //             tap(value => {
// //                 console.log(`Index ${index} - ${value}`)
// //             }),
// //             take(6),
// //         ),
// //     ),
// // );

// // const stream$ = interval(100).pipe(
// //     // map(() => interval(1000)),
// //     // mergeAll(),
// //     exhaustMap(
// //         index => interval(1000).pipe(
// //             tap(value => {
// //                 console.log(`Index ${index} - ${value}`)
// //             }),
// //             take(6),
// //         ),
// //     ),
// // );

// // stream$.subscribe(terminalLog);

// function switchMap(cb: (valeue: any) => Observable<any>): OperatorFunction<any, any> {
//     return (source$: Observable<any>): Observable<any> => new Observable(subscriber => {
//         let nestedSubscription: Subscription | null = null;

//         const subscription = source$.subscribe({
//             next: parentValue => {
//                 if (nestedSubscription) {
//                     nestedSubscription.unsubscribe();
//                 }

//                 const innerStream$ = cb(parentValue);

//                 nestedSubscription = innerStream$.subscribe(value => {
//                     subscriber.next(value);
//                 });
//             },
//         });

//         return () => {
//             subscription.unsubscribe();

//             if (nestedSubscription) {
//                 nestedSubscription.unsubscribe();
//             }
//         }
//     })
// }