import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  providers: [provideNativeDateAdapter(), {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},],
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  hidePassword: boolean = true;

  signUpFormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(20)]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
  });

}
