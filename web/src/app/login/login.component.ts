import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
  // styleUrls: ['']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    // private authenticationService: AuthService,
    // private userDAO: UserDAO
    ) { }

  ngOnInit() {
  }

  // login() {
  //   this.router.navigate(['portal']);
  //   console.log(this.model);
  //   this.authenticationService.login(this.model.username, this.model.password)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.router.navigate(['portal']);
  //       },
  //       error => {
  //         this.router.navigate(['portal']);
  //         console.log("login failed");
  //       });
  // }
}
