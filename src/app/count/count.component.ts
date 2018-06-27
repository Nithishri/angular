import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent  {
count(y)
{
  var nr=y;

  setTimeout(()=>{

    console.log("Entered number" +nr);
  },5000)
}


}
