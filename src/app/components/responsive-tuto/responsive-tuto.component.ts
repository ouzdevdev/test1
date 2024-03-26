import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-tuto',
  templateUrl: './responsive-tuto.component.html',
  styleUrls: ['./responsive-tuto.component.scss']
})
export class ResponsiveComponent  implements OnInit  {

  // nav:boolean=false;
  isActive:boolean=false;
  ngOnInit(){
  }
    toggle(){
      this.isActive=!this.isActive;
    }
}