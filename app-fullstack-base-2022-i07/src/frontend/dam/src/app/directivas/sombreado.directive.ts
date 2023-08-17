import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appSombreado]'
})
export class SombreadoDirective {

  constructor(private el:ElementRef) { 
    
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = 'gray';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'red';
  } 

}
