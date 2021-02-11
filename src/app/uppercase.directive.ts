import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.textDecoration='underline';

  }
}
