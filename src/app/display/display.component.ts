import { Component} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent  {

myFunc(a)
{
  var numb=a;
  alert("Entered number" + numb);
}


}
