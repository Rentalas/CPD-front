import { Component } from '@angular/core';
import { SignInComponent } from "./sign-in/sign-in.component";

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    imports: [SignInComponent]
})
export class AuthComponent {

}
