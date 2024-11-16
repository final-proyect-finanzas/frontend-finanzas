import { Component } from '@angular/core';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    SidenavComponent,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  isSidenavOpen = false;

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
