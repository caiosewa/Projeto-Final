import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log( "  _________ __        ___ ________ ________");
    console.log( " |         |   |_   _|   |        |___    / ");
    console.log( " |   (_)   |     |_|     |  (_)   |  /   /  ");
    console.log( " |    _    |             |   _    | /   /   ");
    console.log( " |     |   |   |    /|   |    |   |/   /___ "); 
    console.log( " |__   |___|___|  _/ |___|__  |___|________|");
    console.log( "\n        SEJA BEM VINDO A LOJA AMAZ.\n\n");
    window.scrollTo(0, 0);
  }

}
