// import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, Subscription, asapScheduler, asyncScheduler, combineLatest, from, interval, observeOn, of, scheduled, share, subscribeOn, take, tap } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const testArray = Array.from({length: 10}).map((_value, index) => index);

// from(testArray, asyncScheduler).subscribe(console.log);
// console.log('Test');
// from(testArray, asapScheduler).subscribe(console.log);

// scheduled(testArray, asyncScheduler).subscribe(v => {
//     console.log('Subscribe 1 - ', v)
// });
// console.log('Test');
// scheduled(testArray, asapScheduler).subscribe(v => {
//     console.log('Subscribe 2 - ', v)
// });

// from(testArray).pipe(observeOn(...)) -> scheduled(testArray, ...)

// from(testArray)
//     .pipe(
//         tap(v => {
//             console.log('Default scheduler', v)
//         }),
//         observeOn(asyncScheduler),
//         tap(v => {
//             console.log('Before async scheduler', v)
//         }),
//         subscribeOn(asapScheduler),
//     )
//     .subscribe(v => {
//         console.log('async subscribe - ', v)
//     });

// of(1, 2, 3).subscribe(v => {
//     console.log('sync subscribe - ', v)
// });

// const streamFirst$ = of(1, 2);
// const streamFirst$ = scheduled([1, 2], asyncScheduler);
// const streamSecond$ = of(10);

// const stream$ = combineLatest([
//     streamFirst$,
//     streamSecond$,
// ]);

// stream$.subscribe(console.log);
