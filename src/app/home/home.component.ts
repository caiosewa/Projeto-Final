import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Globals';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Globals]
})
export class HomeComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
   this.usuario = Globals.USUARIO;
  }
}
