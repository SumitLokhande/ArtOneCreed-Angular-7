import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dance-page',
  templateUrl: './dance-page.component.html',
  styleUrls: ['./dance-page.component.sass']
})
export class DancePageComponent implements OnInit {
  list = [
    { que: ' What is your first name? * ', ans: 'Nikhil' },
    { que: ' What is your last name? * ', ans: 'Tester' },
    {
      que: 'On what email address can we reach you, _____? *',
      ans: 'testico@nikhil.com'
    },
    {
      que:
        'Are you an authorised decision maker or in charge of the project? *',
      ans: 'Yes'
    },
    {
      que: 'Please describe your project in one sentence: *',
      ans:
        'Platform BOW ICO logo BOW BOW APP is a Blockchain application that ensures the traceability of luxury products for individuals. The BOW SOFTWARE is a B2B platform for luxury... UPCOMING'
    },
    { que: 'Is your coin or token classified as a security? *', ans: 'Yes' },
    { que: 'What is the name of your project? *', ans: 'Block of Work' },
    {
      que: 'What is the full name of your token or coin? *',
      ans: 'Block of Work'
    },
    { que: 'What is the symbol of your token or coin? *', ans: 'BOW' },
    {
      que: 'What is the official website of your project? *',
      ans: 'BOWICO.COM'
    },
    { que: 'In what country is your project incorporated? *', ans: 'THAILAND' },
    {
      que: 'Please share the permanent link to your whitepaper: *',
      ans: 'https//blockofwork.com/whitepaper.pdf'
    },
    { que: 'What is the nature of your project? *', ans: 'Platform' },
    {
      que: 'What is the core business of your project? *',
      ans: 'Trading Platform'
    },
    {
      que: 'What is the target industry of your project? *',
      ans: 'Cryptocurrency Exchange'
    },
    {
      que: 'What is the current status of your project? *',
      ans: ' The project is Live'
    },
    {
      que: 'What is the long-term vision of the project? *',
      ans: 'Earn good money from cryptocurrency trading platform'
    },
    {
      que: 'What is the utility of the token or coin? *',
      ans: 'BOW is Trading Token use to give rewards of our platform users'
    },

    {
      que: 'On what platform is your token or coin based on? *',
      ans: 'Ethereum'
    },
    { que: 'Is your token or coin based on the ERC20 standard? *', ans: 'Yes' }
  ];
  constructor() {}

  ngOnInit() {}
}
