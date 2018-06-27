import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent  {
sample(b)
{
  var number=b;
  var count=0;
  while(count<number)
  {
    count++;
    alert("Entered Number:"+number);
  }

}

}
