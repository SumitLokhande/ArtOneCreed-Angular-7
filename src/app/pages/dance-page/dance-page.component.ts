import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-dance-page',
  templateUrl: './dance-page.component.html',
  styleUrls: ['./dance-page.component.sass']
})
export class DancePageComponent implements OnInit {


  constructor() {}

  ngOnInit() {}

  toPDF(){
    var doc = new jsPDF()
    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
  }
}
