import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/services';

@Component({
  selector: 'vibe-sidebar',
  templateUrl: './sidebar.component.html',
  // styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isAuthenticated: boolean;
  
  isLoggedIn: boolean = true;

  constructor( public router: Router,  private authenticationService: AuthService) {
    
   }

  async ngOnInit() {
    // Get the authentication state for immediate use
  }

  async logout() {
    // Terminates the session with Okta and removes current tokens.
    this.authenticationService.logout()
    .subscribe(
      data => {
        this.router.navigate(['login']);
      },
      error => {
        console.log(error);
      }
    )
  }

  print(){
  }

  notOnPortalScreen() {
    return window.location.pathname != "/portal";
  }

  back() {
    window.history.back();
  }
}
