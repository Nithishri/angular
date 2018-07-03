import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent  {
myfunction(x:number){

  alert("SQ of number:" +x*x);
}




}
