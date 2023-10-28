import { fromEvent, map, withLatestFrom } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';
import { createSlider$ } from './slider';

const buttonElement = document.getElementById('send-result') as HTMLElement;

// createSlider$('quality').subscribe(terminalLog);
// createSlider$('rating').subscribe(terminalLog);
// createSlider$('actual').subscribe(terminalLog);

const buttonElementClick$ = fromEvent(buttonElement, 'click');

buttonElementClick$.pipe(
    withLatestFrom(
        createSlider$('quality'),
        createSlider$('rating'),
        createSlider$('actual'),
    ),
    map(([_click, quality, rating, actual]) => (quality + rating + actual) / 3)
).subscribe(terminalLog);
