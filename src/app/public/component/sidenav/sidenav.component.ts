import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../iam/services/authentication.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
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
