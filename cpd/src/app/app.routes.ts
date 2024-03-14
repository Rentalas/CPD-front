import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent}
];
