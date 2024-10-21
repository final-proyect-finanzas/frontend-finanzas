import { Routes } from '@angular/router';
import { HomeComponent } from './public/component/home/home.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
import { PostBillsComponent } from './bills/pages/post-bills/post-bills.component';
import { authenticationGuard } from './iam/services/authentication.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authenticationGuard] },
  { path: 'sign-in', component: SignInComponent, canActivate: [authenticationGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [authenticationGuard] },
  { path: 'post-bills', component: PostBillsComponent, canActivate: [authenticationGuard] },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: '/sign-in' }
];
