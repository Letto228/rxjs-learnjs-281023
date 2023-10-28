// import { Observable, defer, from, interval, of, timer } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// interval(4000).subscribe(terminalLog);

// timer(0, 4000).subscribe(terminalLog);

// of(1, 2, [3, 4], {count: 5}).subscribe({
//     next: value => {
//         console.log(value)
//     },
//     complete: () => {
//         console.log('completed');
//     },
// });

// from([1, 2, [3, 4], {count: 5}]).subscribe({
//     next: value => {
//         console.log(value)
//     },
//     complete: () => {
//         console.log('completed');
//     },
// });

// from({length: 5}).subscribe({
//     next: value => {
//         console.log(value)
//     },
//     complete: () => {
//         console.log('completed');
//     },
// });

// from(
//     fetch('http://localhost:8080/')
// ).subscribe({
//     next: value => {
//         console.log(value)
//     },
//     complete: () => {
//         console.log('completed');
//     },
// });

// ajax({
//     url: 'http://localhost:8080/'
// }).subscribe({
//     next: value => {
//         console.log(value)
//     },
//     complete: () => {
//         console.log('completed');
//     },
// });

// const deferStream$ = defer(() => {
//     const random = Math.random();

//     if (random > 0.7) {
//         return [1, 2, 3];
//     }

//     if (random > 0.4) {
//         return fetch('http://localhost:8080/');
//     }

//     return of(3, 2, 1);
// });

// deferStream$.subscribe(console.log);
