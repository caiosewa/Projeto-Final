import { Component, OnInit } from '@angular/core';
import { ConsultaUsuarioService } from '../service/consulta-usuario.service';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private login: ConsultaUsuarioService) { }

  nome: string;
  log: boolean; // recebe o valor do log do login service,  sendo utilizado pelo button do menu component

  ngOnInit() {
    this.login.log.subscribe(value => {
      this.log = value;
      this.nome = localStorage.getItem("nome");
    });
  }

  logout(){
    this.login.log.next(false);
    Globals.USUARIO = undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
