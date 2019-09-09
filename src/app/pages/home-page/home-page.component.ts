import { Component, OnInit, Injector } from '@angular/core';
import { BaseApp } from 'src/app/common/base-app';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent extends BaseApp implements OnInit {
  timeLeft: number = 60;
      subscribeTimer: any;
  constructor(injector:Injector) {
    super(injector)
   }

  ngOnInit() {
    this.startCountDown();
  }
  startCountDown() {
    const source = timer(1000, 2000);
const abc = source.subscribe(val => {
  console.log(val, '-');
  this.subscribeTimer = this.timeLeft - val;
});
    // this.min= expiry_time.getMinutes();
}
}
