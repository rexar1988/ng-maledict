import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionContainerDirective } from './directives/container/accordion-container.directive';
import { AccordionContentDirective } from './directives/content/accordion-content.directive';
import { AccordionItemDirective } from './directives/item/accordion-item.directive';
import { AccordionTitleDirective } from './directives/title/accordion-title.directive';

@NgModule({
  declarations: [
    AccordionContainerDirective,
    AccordionContentDirective,
    AccordionItemDirective,
    AccordionTitleDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionContainerDirective,
    AccordionContentDirective,
    AccordionItemDirective,
    AccordionTitleDirective,
  ],
})
export class AccordionModule { }
