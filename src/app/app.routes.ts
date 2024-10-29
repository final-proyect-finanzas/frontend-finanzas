import { Routes } from '@angular/router';
import { HomeComponent } from './public/component/home/home.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
import { PostBillsComponent } from './bills/pages/post-bills/post-bills.component';
import { authenticationGuard } from './iam/services/authentication.guard';
import { ViewBillsComponent } from './view-bill/pages/view-bills/view-bills.component';

export const routes: Routes = [
  { path: 'home/:companyId', component: HomeComponent, canActivate: [authenticationGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'post-bills/:companyId', component: PostBillsComponent, canActivate: [authenticationGuard] },
  { path: 'bills/:companyId', component: ViewBillsComponent, canActivate: [authenticationGuard] },
  //TODO: -Ver wallets y en esa page crear Wallet. Crear Wallet Component. Añadir facturas a Wallet
  //Todo: Page to generate discount about a wallet.
  //Todo: Page to show the report about the discount.


  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: '/sign-in' }
];
