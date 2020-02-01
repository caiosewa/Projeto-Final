import { ConsultaProdutosService } from './../service/consulta-produtos.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';
import { Globals } from '../model/Globals';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.css']
})
export class InserirProdutoComponent implements OnInit {

  usuario: Usuario;
  private produto: Produto = new Produto(0, "", "", "", null, null);
  private produtos: Array<Produto> = new Array<Produto>();
  private idProduto: number;

  constructor(public ConsultaProdutosService: ConsultaProdutosService, public router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (Globals.USUARIO == undefined) {
      this.router.navigate(['/login']);
    } else {
      this.usuario = Globals.USUARIO;
    }
  }

  insert() {
    this.ConsultaProdutosService.insert(this.produto).subscribe((produtoOut: Produto) => {
      this.produto = produtoOut;
    });
    this.router.navigate(['/produtos']);
  }

}
