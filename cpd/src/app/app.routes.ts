import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'account', component: AccountComponent}
];
