import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(el:ElementRef) {

       el.nativeElement.style.color="blue";
       el.nativeElement.style.background="black";
       el.nativeElement.style.font= "Josefin slab";

   }

}
