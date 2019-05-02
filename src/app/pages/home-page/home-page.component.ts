import { Component, OnInit, Injector } from '@angular/core';
import { BaseApp } from 'src/app/common/base-app';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent extends BaseApp implements OnInit {
  constructor(injector:Injector) {
    super(injector)
   }

  ngOnInit() {

  }

}
