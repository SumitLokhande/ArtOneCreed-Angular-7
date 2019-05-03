import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.sass']
})
export class ShowcaseComponent implements OnInit {
  url: string;
  showDetailActive: boolean;
  artForms =  [
    { name : 'Dance', url : '../../../assets/imgs/zac-ong-463187-unsplash.jpg'},
    { name : 'Graffiti' , url : '../../../assets/imgs/paolo-nicolello-546092-unsplash.jpg'},
    { name : 'Music', url : '../../../assets/imgs/zac-ong-463187-unsplash.jpg'},
    { name : 'Photography', url : '../../../assets/imgs/zac-ong-463187-unsplash.jpg'},
    { name : 'Travel', url : '../../../assets/imgs/zac-ong-463187-unsplash.jpg'}

  ]
  constructor() {
    this.url = '../../../assets/imgs/zac-ong-463187-unsplash.jpg';
   }

  ngOnInit() {
  }

  showDetails(name){
    this.showDetailActive=true;
    console.log(name);
  }
}
