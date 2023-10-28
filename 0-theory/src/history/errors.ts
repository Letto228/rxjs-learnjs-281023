// import { EMPTY, NEVER, Observable, OperatorFunction, Subscription, catchError, concatMap, exhaustMap, filter, interval, map, mergeAll, mergeMap, of, pipe, retry, switchMap, take, tap, throwError, timer } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// new Observable<number>(subscriber => {
//     subscriber.next(1);
//     subscriber.next(10);
//     subscriber.error('Error!');
// })
//     .pipe(
//         // catchError(error => {
//         //     return error.code === userError
//         //         ? EMPTY
//         //         : throwError(() => new Error('Need retry'));
//         // }),
//         retry({
//             count: 3,
//             // delay: 3000,
//             delay: (error, retryCount) => {
//                 console.log(error, retryCount);

//                 return timer(1000 * retryCount);
//             },
//             resetOnSuccess: false,
//         }),
//         catchError(error => {
//             console.log(error);

//             // return of(0);
//             // return interval(1000);
//             return EMPTY;
//             // return NEVER;
//             // return throwError(() => new Error('Error 2'));
//             // return caugth;
//         }),
//         map(value => value * 2),
//     )
//     .subscribe({
//         next: terminalLog,
//         complete: () => {
//             terminalLog('Completed');
//         },
//         error: error => {
//             terminalLog('Error' + error);
//         }
//     });

// // EMPTY: |

// // NEVER: ----------------...

// // THROW: X
