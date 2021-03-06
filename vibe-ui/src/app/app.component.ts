import { Component, OnInit } from '@angular/core';
import { ApiHelper } from './core/service/api.helper.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  isAuthenticated: boolean;
  busy : any ='';
  constructor(private apiHelper : ApiHelper) {
      var self = this;
  }

  async ngOnInit() {
    // Subscribe to authentication state changes
  }
}