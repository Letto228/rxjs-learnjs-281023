import { Observable, Subscriber, Subscription, timeInterval } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const ws = new WebSocket('ws://localhost:8081');

// ws.onopen = () => {
//     ws.send('on');
// };

// const wsMessages$ = new Observable<MessageEvent>(subscriber => {
//     console.log('START');

//     function listenMessage({data}: MessageEvent) {
//         console.log('NEW DATA', data);
//         subscriber.next(data);
//     }

//     function listenSocketClose() {
//         subscriber.complete();
//     }

//     function listenSocketError(error: Event) {
//         subscriber.error(error);
//     }

//     ws.addEventListener('message', listenMessage);
//     ws.addEventListener('complete', listenSocketClose);
//     ws.addEventListener('error', listenSocketError);

//     return () => {
//         console.log('DESTROY');
//         ws.removeEventListener('message', listenMessage);
//         ws.removeEventListener('complete', listenSocketClose);
//         ws.removeEventListener('error', listenSocketError);
//     }
// })

// wsMessages$.subscribe({
//     next: value => {
//         terminalLog(`S - 1: ${value}`);
//     }
// })

// setTimeout(() => {
//     wsMessages$.subscribe(value => {
//         terminalLog(`S - 2: ${value}`);
//     })
// }, 3000);
