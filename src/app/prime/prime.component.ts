  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent  {
checkPrime =function (form)
{
  console.log(`form ===> ${form}`);

  let num=form;
  let i=1,count=0;
  for(i=1;i<=num;i++)
  {
    if(num%i===0)
    {
      count++;

    }

  }
  if(count===2)
  {
    alert("The given number  is a prime number");

  }
  else
  {
    alert("The given number  is not a prime number");

  }
}



}
