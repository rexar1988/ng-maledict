import {
  AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[maledictAccordionItem]',
})
export class AccordionItemDirective implements OnChanges, OnInit, AfterViewInit {
  @Input() isActive = false;
  accordionTitle: HTMLElement | undefined;
  accordionContent: HTMLElement | undefined;
  titleHeight: number | undefined;
  contentHeight: number | undefined;

  constructor(private elementRef: ElementRef,
              private renderer2: Renderer2,
  ) {}

  @HostListener('click', ['$event']) onClick(event: MouseEvent): void {
    const element = (event.target as HTMLElement);
    this.isActive = !this.isActive;

    if (element.classList.contains('accordion__title') || element.closest('.accordion__title')) {
      this.toggleItem();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.elementRef.nativeElement && this.accordionContent && changes.isActive) {
      this.toggleItem();
    }
  }

  ngOnInit(): void {
    this.renderer2.addClass(this.elementRef.nativeElement, 'accordion__item');

    if (this.isActive) {
      this.renderer2.addClass(this.elementRef.nativeElement, 'accordion__item--active');
    }
  }

  ngAfterViewInit(): void {
    this.accordionTitle = this.elementRef.nativeElement.querySelector('.accordion__title');
    this.accordionContent = this.elementRef.nativeElement.querySelector('.accordion__content');

    this.titleHeight = this.accordionTitle?.offsetHeight;
    this.contentHeight = this.accordionContent?.offsetHeight;

    this.toggleItem();
  }

  toggleItem(): void {
    if (this.isActive) {
      this.renderer2.addClass(this.elementRef.nativeElement, 'accordion__item--active');
      this.renderer2.setStyle(this.accordionContent, 'max-height', `${this.contentHeight}px`);

    } else {
      this.renderer2.removeClass(this.elementRef.nativeElement, 'accordion__item--active');
      this.renderer2.setStyle(this.accordionContent, 'max-height', '0px');
    }
  }
}
