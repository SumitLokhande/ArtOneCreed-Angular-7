import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.sass']
})
export class ShowcaseComponent implements OnInit {
  url: string;
  artForms =  [
    { name : 'Dance'},
    { name : 'Graffiti'},
    { name : 'Music'},
    { name : 'Photography'},
    { name : 'Travel'}

  ]
  constructor() {
    this.url = 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';
   }

  ngOnInit() {
  }

  showDetails(name){
    console.log(name);
  }
}
