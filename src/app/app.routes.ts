import { Routes } from '@angular/router';
import { HomeComponent } from './public/component/home/home.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
import { PostBillsComponent } from './bills/pages/post-bills/post-bills.component';
import { authenticationGuard } from './iam/services/authentication.guard';
import { ViewBillsComponent } from './view-bill/pages/view-bills/view-bills.component';
import {ViewWalletsComponent} from './wallets/pages/view-wallets/view-wallets.component';
import {CreateWalletsComponent} from './wallets/pages/create-wallets/create-wallets.component';
import {DetailsWalletComponent} from './wallets/pages/details-wallet/details-wallet.component';
import {ReportWalletComponent} from './wallets/pages/report-wallet/report-wallet.component';

export const routes: Routes = [
  { path: 'home/:companyId', component: HomeComponent, canActivate: [authenticationGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'post-bills/:companyId', component: PostBillsComponent, canActivate: [authenticationGuard] },
  { path: 'bills/:companyId', component: ViewBillsComponent, canActivate: [authenticationGuard] },
  { path: 'wallets/:companyId', component: ViewWalletsComponent, canActivate: [authenticationGuard] },
  {path: 'wallets/create/:companyId', component:CreateWalletsComponent, canActivate: [authenticationGuard]},
  {path: 'company/:companyId/wallet/:walletId', component:DetailsWalletComponent, canActivate: [authenticationGuard]},
  {path: 'wallet/:walletId/report', component: ReportWalletComponent, canActivate: [authenticationGuard]},
  //Todo: Page to generate discount about a wallet. ( view details
  //Todo: Page to show the report about the discount.


  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: '/sign-in' }
];
