import { combineLatest, fromEvent, map, startWith } from "rxjs";
import { userService } from "./user.service";
import './styles.css';

export class FormComponent {
    readonly inputElement: HTMLInputElement;
    readonly buttonElement: HTMLButtonElement;

    constructor(formContainer: HTMLElement) {
        const inputElement = formContainer.querySelector('input');
        const buttonElement = formContainer.querySelector('button');

        if (!inputElement || !buttonElement) {
            throw new Error('Форма не валидна');
        }

        this.inputElement = inputElement;
        this.buttonElement = buttonElement;

        this.listenInputChange();
    }

    private listenInputChange() {
        const inputValue$ = fromEvent(this.inputElement, 'input')
            .pipe(
                map(({target}) => (target as HTMLInputElement).value),
                startWith(this.inputElement.value),
            );

        combineLatest([
            inputValue$,
            userService.uniqueNameSequence$
        ]).subscribe(([inputValue, names]) => {
            this.updateFormValidStatus(inputValue, names);
        })
    }

    private updateFormValidStatus(inputValue: string, names: string[]) {
        const isValid = inputValue && names.includes(inputValue);

        this.buttonElement.disabled = !isValid;

        if (isValid) {
            this.inputElement.classList.remove('error');

            return;
        }

        this.inputElement.classList.add('error');
    }
}