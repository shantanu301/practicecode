import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})

export class SizerDirective {

  @Input('rock')
  @HostBinding('style.width.px')
  width:number
  
  constructor(private el:ElementRef,private rnd:Renderer2) { 
  // ElementRef
    el.nativeElement.style.background = "orange"

  //renderer2
    rnd.setStyle(el.nativeElement,'border','3px solid #000')

  //host binding
    this.width = 300
}

@HostListener('mouseenter') in(){
  this.width = 600
}
@HostListener('mouseleave') out(){
  this.width = 300
}
  
}
