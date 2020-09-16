import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { JsaCounterComponent } from './jsa-counter/jsa-counter.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    JsaCounterComponent
  ],
  entryComponents: [
    JsaCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

constructor(private injector: Injector) {}

ngDoBootstrap() {
  const customeelem = createCustomElement(JsaCounterComponent, {injector: this.injector});
  customElements.define('jsa-counter', customeelem);
}

}
