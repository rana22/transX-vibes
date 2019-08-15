import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public items: any[];

  constructor() { }

  ngOnInit() {
    this.items = [{
      name: 'cake',
      priority: 1,
      isAdded: null
    },
      {name: 'clothes',
      priority:2,
      isAdded: null
    },
    {name: 'pictures',
    priority:2,
    isAdded: null
  }];
  }

  checkAtleastOneItemSlected(){
    console.log("check if it is executed !!")
    const selectedItems = this.items.filter((item)=> item.isAdded !== null);
    if(selectedItems.length > 0){
      return true;
    }else{
      return false;
    }
  }

}
