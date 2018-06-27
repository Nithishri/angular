import { Component, OnInit } from '@angular/core';
import {d} from "@angular/core/src/render3";

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent  {
   showAlert(a)
  {

 //let num=document.getElementById("txt");
    let num=a;
 console.log("Entered no:",a)
 let count=0;
 while(count<=num)
 {

   alert(num);
   count++;

 }
  }




}
