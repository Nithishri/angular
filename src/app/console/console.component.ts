import { Component } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent  {

consol(m)
 {

var num1=m;
   var loop=0;
     while(loop<num1){
     loop++;
       console.log("Display number",num1);
     }




}
}
