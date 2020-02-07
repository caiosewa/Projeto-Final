import { Produto } from './../model/produto';
import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Globals';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import { ConsultaProdutosService } from '../service/consulta-produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Globals]
})
export class HomeComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "", 1);

  produto: Produto = new Produto(0, "", "", "", null, null, 1);
  id: number;


  constructor(private router: Router, public ConsultaProdutoService: ConsultaProdutosService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.usuario = Globals.USUARIO;
  }

  produtos() {
        this.router.navigate(['produtos']);
 }

}
