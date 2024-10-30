import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../iam/services/authentication.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  companyId: number | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.companyId = +params['companyId']; // The + sign converts the parameter to a number
    });
  }

  navigateToPostBills(): void {
    this.router.navigate([`/post-bills/${this.companyId}`]);
  }

  logOut(): void {
    this.authService.signOut();
  }

  goBills(): void {
    this.router.navigate([`/bills/${this.companyId}`]);
  }

  goWallets(): void {
    this.router.navigate([`/wallets/${this.companyId}`]);
  }
}
