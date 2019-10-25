import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vibe-sidebar',
  templateUrl: './sidebar.component.html',
  // styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isAuthenticated: boolean;

  isLoggedIn: boolean = true;

  constructor( public router: Router) {
    
   }

  async ngOnInit() {
    // Get the authentication state for immediate use
  }

  async logout() {
    // Terminates the session with Okta and removes current tokens.
    this.router.navigateByUrl('/login');
  }

  print(){
    console.log("Home cliked")
  }
}
