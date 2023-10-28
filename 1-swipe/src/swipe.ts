import { Observable, filter, map, tap, zip } from "rxjs";

function getXPosition(event: MouseEvent) {
    return event.clientX;
}

export function swipe$(
    down$: Observable<MouseEvent>,
    up$: Observable<MouseEvent>,
) {
    return zip(
        down$.pipe(map(getXPosition)),
        up$.pipe(map(getXPosition)),
    ).pipe(
        map(([downPosition, upPosition]) => downPosition - upPosition),
        filter(diff => Math.abs(diff) > 30),
    )
}