import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter')
  onMouseEnter()
  {
    this.el.nativeElement.style.color = 'pink';
  }
  @HostListener('mouseleave')
  onMouseLeave()
  {
    this.el.nativeElement.style.color = 'green';
  }

  @HostListener('click') Onclick()
  {
    this.el.nativeElement.style.backgroundColor = 'red';
    alert("you have selected");
  }

  @HostListener('select') Onselect()
  {
    alert("you have selected");
  }
}
