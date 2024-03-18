import { Component, effect, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PasswordIcon } from '../constants';
import { InputType } from '../../constants';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  data = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(20), Validators.required])
  });

  hidePassword = signal(true);
  passwordInputType: InputType = InputType.password;
  passwordMatIcon: PasswordIcon = PasswordIcon.visibility;

  constructor() {
    effect(() => {
      if(this.hidePassword()) {
        this.passwordInputType = InputType.password;
        this.passwordMatIcon = PasswordIcon.visibility_off;
        return
      }
        this.passwordInputType = InputType.text;
        this.passwordMatIcon = PasswordIcon.visibility;
    })
  }
}
