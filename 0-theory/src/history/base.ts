// import { Observable, Subscriber, Subscription, timeInterval } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const sequence = new Promise(resolve => {
//     let count = 0;

//     setInterval(() => {
//         count += 1;

//         console.log('setInterval', count);

//         resolve(count);
//     }, 1000);
// });

// sequence.then(counter => {
//     terminalLog(`first then: ${counter}`);
// });

// setTimeout(() => {
//     sequence.then(counter => {
//         terminalLog(`timeout then: ${counter}`);
//     });
// }, 3000);

// const sequence = (function* iteratorFn() {
//     let count = 0;

//     while (true) {
//         count += 1;

//         console.log('iteratorFn', count);

//         yield count;
//     }
// })()

// terminalLog(`first call: ${sequence.next().value}`);

// setTimeout(() => {
//     terminalLog(`temout call: ${sequence.next().value}`);
// }, 3000);

// const sequence$ = new Observable<number>((subscriber: Subscriber<number>) => {
//     console.log('START');

//     let count = 0;

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('INCREMENT', count);

//         subscriber.next(count);

//         if (count === 5) {
//             // subscriber.complete(); // Observable dead
//             // subscriber.error(new Error('overflow')); // Observable dead
//         }
//     }, 1000);

//     return () => { // Destroy function
//         console.log('DESTROY');

//         clearInterval(intervalId);
//     }
// });

// sequence$.subscribe(count => {
//     terminalLog(count);
// });

// setTimeout(() => {
//     sequence$.subscribe(count => {
//         terminalLog(count);
//     });
// }, 3000);

// const subscription = sequence$.subscribe({
//     next: count => {
//         terminalLog(count);
//     },
//     error: error => {
//         terminalLog(error);
//     },
//     complete: () => {
//         terminalLog('completed');
//     },
// });

// setTimeout(() => {
//     console.log('subscription.closed', subscription.closed);
//     subscription.unsubscribe();
//     console.log('subscription.closed', subscription.closed);
// }, 2000);

// const allSubscription = new Subscription();

// allSubscription.add(
//     sequence$.subscribe({
//         next: count => {
//             terminalLog(count);
//         },
//         error: error => {
//             terminalLog(error);
//         },
//         complete: () => {
//             terminalLog('completed');
//         },
//     })
// );

// setTimeout(() => {
//     console.log('subscription.closed', allSubscription.closed);
//     allSubscription.unsubscribe();
//     console.log('subscription.closed', allSubscription.closed);
// }, 2000);

// function createTimer$(finalCount: number): Observable<number> {
//     return new Observable<number>((subscriber: Subscriber<number>) => {
//         console.log('START');
    
//         let count = 0;
    
//         const intervalId = setInterval(() => {
//             count += 1;
    
//             console.log('INCREMENT', count);
    
//             subscriber.next(count);
    
//             if (count === finalCount) {
//                 subscriber.complete(); // Observable dead
//                 // subscriber.error(new Error('overflow')); // Observable dead
//             }
//         }, 1000);
    
//         return () => { // Destroy function
//             console.log('DESTROY');
    
//             clearInterval(intervalId);
//         }
//     })
// };

// createTimer$(7).subscribe(count => {
//     terminalLog(count);
// })
