import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-jsa-counter',
  templateUrl: './jsa-counter.component.html',
  styleUrls: ['./jsa-counter.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class JsaCounterComponent implements OnInit {
  counterLocal = 0;
  constructor() { }

  ngOnInit() {
  }


  @Input()
  set counter(counterPassed: number) {
    this.counterLocal = counterPassed;
  }

  get counter() {
    return this.counterLocal;
  }

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
