import { EMPTY, OperatorFunction, catchError, debounceTime, distinctUntilChanged, filter, map, pipe, retry, switchMap } from "rxjs";
import { AjaxConfig, ajax } from "rxjs/ajax";

export function liveSearch<T>(
    urlCreater: (searchParam: string) => string,
    requestConfig: Omit<AjaxConfig, 'url'> = {crossDomain: true},
): OperatorFunction<string, T> {
    return pipe(
        debounceTime(300),
        // filter(searcParam => !searcParam || searcParam.length >= 3),
        distinctUntilChanged(),
        map(searchParam => ({
            ...requestConfig,
            url: urlCreater(searchParam),
        }) as AjaxConfig),
        switchMap(ajaxConfig => ajax<T>(ajaxConfig).pipe(
            map(({response}) => response),
            retry({
                count: 3,
                delay: 2000,
            }),
            catchError(() => EMPTY),
        )),
    );
}