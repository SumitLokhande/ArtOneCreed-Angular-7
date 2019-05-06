import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toNavigate(path){
    this.router.navigate(['home']);
  }
}
