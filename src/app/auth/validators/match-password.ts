import { Injectable } from "@angular/core";
import { FormGroup, ValidationErrors, Validator } from "@angular/forms";

@Injectable({ providedIn: "root"})
export class MatchPassword implements Validator {
    validate(formGroup: FormGroup): ValidationErrors {
        const { password, passwordConfirm } = formGroup.value;

        if (password === passwordConfirm) {
            return null;
        } else {
            return { passwordsDontMatch: true}
        }
    }
}
