import { Component, effect, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import { PasswordIcon } from '../constants';
import { InputType } from '../../constants';
import { AuthService } from '../auth.service';
import { Nullable } from '../../abstraction';
import { take } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private authService = inject(AuthService);

  hidePassword = signal(true);

  signUp = signal<Nullable<Event>>(null)

  passwordInputType: InputType = InputType.password;

  passwordIcon: PasswordIcon = PasswordIcon.visibility;

  userData = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(20), Validators.required]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  });

  constructor() {
    effect(() => {
      if(this.hidePassword()) {
        this.passwordInputType = InputType.password;
        this.passwordIcon = PasswordIcon.visibility_off;
        return;
      }
        this.passwordInputType = InputType.text;
        this.passwordIcon = PasswordIcon.visibility;
    })

    effect(() => {
      if(!this.signUp()) {
        return;
      }

      const { email, password, firstName, lastName, birthDate, phoneNumber } = this.userData.controls;
      const userData = {
        email: email.value as string,
        password: password.value as string,
        firstName: firstName.value as string,
        lastName: lastName.value as string,
        birthDate: birthDate.value as string,
        phoneNumber: phoneNumber.value as string
      };

      this.authService.signUp(userData).pipe(take(1)).subscribe();
    })
  }
}
