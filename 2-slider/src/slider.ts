import 'bootstrap';
import 'bootstrap-slider';
import  './styles.css';
import { MonoTypeOperatorFunction, Observable, fromEvent, map, startWith, tap } from 'rxjs';

interface JQuerySliderEvent {
    value: {
        newValue: number;
    }
}

enum SliderClass {
    Good = 'good',
    Warn = 'warn',
    Bad = 'bad',
}

function colorizeSliderByValue(element: HTMLElement, value: number) {
    element.classList.remove(...Object.values(SliderClass));

    if (value < 4) {
        element.classList.add(SliderClass.Bad);

        return;
    }

    if (value <= 7) {
        element.classList.add(SliderClass.Warn);

        return
    }

    console.log(value);
    element.classList.add(SliderClass.Good);
}

function colorizeSlider(jqueryElement: JQuery<HTMLElement>): MonoTypeOperatorFunction<number> {
    const element = jqueryElement.prev().get(0).querySelector('.slider-track') as HTMLElement;

    return tap(sliderValue => {
        colorizeSliderByValue(element, sliderValue);
    });
}

export function createSlider$(sliderId: string): Observable<number> {
    const jquerySlider = $(`#${sliderId}`).slider();
    const startValue = Number(jquerySlider.val());

    return fromEvent<JQuerySliderEvent>(jquerySlider, 'change').pipe(
        map(({value}) => value.newValue),
        startWith(startValue),
        colorizeSlider(jquerySlider),
    );
}
