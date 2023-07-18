import { Directive, Input, ElementRef, Renderer2  ,OnInit} from '@angular/core';

@Directive({
  selector: '[appProgressWidth]'
})
export class ProgressWidthDirective implements OnInit  {

  constructor(private elementRef:ElementRef , private renderer:Renderer2) { }
  @Input() widthValue?:any

  ngOnInit(): void {
   this.renderer.setStyle(this.elementRef.nativeElement , "width" , this.widthValue+'%')

  }
}
