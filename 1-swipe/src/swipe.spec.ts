import { TestScheduler } from "rxjs/testing";
import { swipe$ } from "./swipe";

function createStubMouseEvent(clientX: number): MouseEvent {
    return new MouseEvent('mousemove', {clientX});
}

describe('Test block', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('swipe test', () => {
        testScheduler.run(({expectObservable, cold, expectSubscriptions}) => {
            const mousedown$ = cold(
                '-a------b----------|',
                {
                    a: createStubMouseEvent(2),
                    b: createStubMouseEvent(30),
                }
            );
            const mouseup$ = cold(
                '------a---------b--|',
                {
                    a: createStubMouseEvent(200),
                    b: createStubMouseEvent(20),
                }
            );

            const swipeStream$ = swipe$(
                mousedown$,
                mouseup$,
            );

            const expectedMarbles = '------a------------|';
            const expectedMarblesValueMap = {
                a: -198,
            };

            expectObservable(swipeStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        });
    });
});
