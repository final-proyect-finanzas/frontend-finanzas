import { Routes } from '@angular/router';
import {HomeComponent} from './public/component/home/home.component';
import {SignInComponent} from './iam/pages/sign-in/sign-in.component';
import {SignUpComponent} from './iam/pages/sign-up/sign-up.component';

export const routes: Routes = [
  {path:'home', component: HomeComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
];
