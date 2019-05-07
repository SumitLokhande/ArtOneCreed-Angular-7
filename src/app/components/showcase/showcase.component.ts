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
    { name : 'Music', url : '../../../assets/imgs/audio-close-up-console-1481312.jpg'},
    { name : 'Photography', url : '../../../assets/imgs/dariusz-sankowski-57167-unsplash.jpg'},
    { name : 'Travel', url : '../../../assets/imgs/raj-eiamworakul-764301-unsplash.jpg'},
    { name : 'Calisthenics', url : '../../../assets/imgs/street-workout-2629179_1920.jpg'},
    { name : 'Poets', url : '../../../assets/imgs/address-book-2246457_1920.jpg'},
    { name : 'Writers', url : '../../../assets/imgs/typewriter-2306479_1920.jpg'},
    { name : 'Influencers', url : '../../../assets/imgs/miguel-henriques-1217377-unsplash.jpg'},
    { name : 'Programmers', url : '../../../assets/imgs/developer-development-from-above-1181275.jpg'}




  ]
  constructor() {
    this.url = '../../../assets/imgs/zac-ong-463187-unsplash.jpg';
   }

  ngOnInit() {
  }

  showDetails(name){
    this.showDetailActive=true;
    console.log(name);
    const selectedArt = this.artForms.find(artType =>artType.name===name)
    this.url = selectedArt.url;
  }
}
