import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective implements OnInit {
  @Input('appUnless')
  cond:boolean
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    console.log(this.templateRef)
    console.log(this.viewContainer)
  }
  ngOnInit(): void {
    if(!this.cond){
      this.viewContainer.createEmbeddedView(this.templateRef)
    }else{
      this.viewContainer.clear()
    }
  }
}
