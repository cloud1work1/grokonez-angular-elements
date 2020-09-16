# AngularElement

## ng add @angular/elements

## Component
- 
  ```
   encapsulation: ViewEncapsulation.ShadowDom
   export class JsaCounterComponent {
     localCounter =0;
     
     @Input()
     set counter(counterpassed: number) {
      this.localCounter = counter;
     }
     
     get counter() {
        return this.localCounter;
     }
     
     increase() {
      this.counter++;
     }
     
     decrease() {
      this.counter--;
     }
   
   }
   
  ```
  
## Component HTML
- ```
  {{counter}}
  <button (click)="increase()>+</button>
  <button (click)="decrease()>-</button>
  ```
## AppModule
- ```
  import { createCustomElement } from '@angular/elements';
  import { Injector } from '@angular/core';
  
  entryComponents: [YoueCompnent],
  bootstrap: []
  
  export class AppModule {
   constructor(private injector: Injector) {}
   
   ngDoBootstrap() {
    const elem = createCustomElements(YourComponent, {injector: this.injector});
    customElements.define('component-tag-name', elem);
   }
  }
  ```
## index.html
- ```
  <!-- <app-root></app-rrot> -->
  <component-tag-name counter='4'></component-tag-name>
  ```
