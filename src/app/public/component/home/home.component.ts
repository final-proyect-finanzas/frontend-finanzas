import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../iam/services/authentication.service';
import {ToolbarComponent} from '../toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
