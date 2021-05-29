import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridModule, LoaderModule } from 'ng-maledict';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    LoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
