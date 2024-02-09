import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Inject } from '@nestjs/common';

@Directive({
  selector: '[hinvHover]',
  standalone: true
})
export class HoverDirective {

  constructor(private element: ElementRef,private renderer: Renderer2) { 
    console.log(this.element.nativeElement);
  }
  color: string='red';
  ngOnInit():void{
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.color);
   
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
  }
}
