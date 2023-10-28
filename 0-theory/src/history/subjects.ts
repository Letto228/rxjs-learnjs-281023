import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // subjects === Observable + Observer

// const subj$ = new AsyncSubject<number>();

// subj$.subscribe(value => {
//     terminalLog(`Subcribe 1 - ${value}`)
// });

// subj$.next(1);
// subj$.next(2);
// subj$.next(3);

// setTimeout(() => {
//     subj$.next(4);
//     subj$.next(5);
//     subj$.next(6);
// }, 4000);

// setTimeout(() => {
//     subj$.subscribe(value => {
//         terminalLog(`Subcribe 2 - ${value}`)
//     })

//     subj$.next(7);
//     subj$.next(8);
//     subj$.next(9);

//     // terminalLog(subj$.value);

//     subj$.complete();
// }, 5000);

// setTimeout(() => {
//     subj$.subscribe(value => {
//         terminalLog(`Subcribe 3 - ${value}`)
//     })
// }, 6000);
