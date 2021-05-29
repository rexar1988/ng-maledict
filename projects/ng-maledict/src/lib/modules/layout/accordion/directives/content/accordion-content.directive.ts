import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[maledictAccordionContent]',
})
export class AccordionContentDirective implements OnInit {

  constructor(private elementRef: ElementRef,
              private renderer2: Renderer2,
  ) { }

  ngOnInit(): void {
    this.renderer2.addClass(this.elementRef.nativeElement, 'accordion__content');
  }
}
