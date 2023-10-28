import { AsyncSubject, Observable, map, share, shareReplay } from "rxjs";
import { User } from "./user.interface";
import { ajax } from "rxjs/ajax";

class UserService {
    uniqueNameSequence$: Observable<string[]> = ajax<User[]>({
        url: 'https://learn.javascript.ru/courses/groups/api/participants?key=10ux70j',
        crossDomain: true,
        method: 'GET',
    }).pipe(
        map(({response}) => response.map(({profileName}) => profileName)),
        // share({
        //     connector: () => new AsyncSubject(),
        //     resetOnComplete: false,
        // }),
        shareReplay(1),
    );
}

export const userService = new UserService();
