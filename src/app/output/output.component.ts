import { Component  } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent  {


 output(m)
  {
    var num=m;
    var cnt=0;

    while(cnt<num)
    {
     cnt++;
      document.write("Entered number:\t",num);

    }
  }

}
