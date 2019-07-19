import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vibe-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  print(){
    console.log("Home cliked")
  }
}
