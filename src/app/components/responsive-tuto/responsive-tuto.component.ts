import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-responsive-tuto',
  templateUrl: './responsive-tuto.component.html',
  styleUrls: ['./responsive-tuto.component.scss','rs.scss']
})
export class ResponsiveComponent  implements OnInit  {

  // nav:boolean=false;
  isActive:boolean=false;
  isActive2:boolean=false;
  ngOnInit(){
  }
    toggle(){
      this.isActive=!this.isActive;
    }
    printTooHatim(){
    window.confirm(" ssir t7wa la ?");

    }

toggle2(){
      this.isActive2=!this.isActive2;
    }
}
