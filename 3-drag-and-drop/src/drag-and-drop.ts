import { Observable, fromEvent, map, switchMap, take, takeUntil, tap } from "rxjs";
import { ElemenPosition } from "./element-position.interface";

export function dragElement$(element: HTMLElement): Observable<ElemenPosition> {
    const elementMosedown$ = fromEvent<MouseEvent>(element, 'mousedown');
    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');

    return elementMosedown$.pipe(
        tap(event => {
            event.preventDefault();
        }),
        takeUntil(mouseup$),
        switchMap(({offsetX, offsetY}) => mousemove$.pipe(
            tap(event => {
                event.preventDefault();
            }),
            map(({clientX, clientY}) => ({
                top: clientY - offsetY,
                left: clientX - offsetX,
            })),
            tap({
                complete: () => {
                    console.log('Completed tap');
                }
            }),
        )),
    );
}