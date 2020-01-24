import { ConsultaProdutosService } from './../service/consulta-produtos.service';
import { Produto } from '../model/produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../model/Globals';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [Globals]
})
export class ProdutosComponent implements OnInit {

  private usuario: Usuario;
  private idProduto: number;
  private titulo: string;
  private descricao: string;
  private linkFoto: string;
  private preco: number;
  private qtdEstoque: number;
  private produto: Produto = new Produto(0, "", "", "", null, null);
  private produtos: Array<Produto> = new Array<Produto>();
  private showId: boolean;
  private showAll: boolean;
  private produtoNao: boolean;
  private ativarAlterar: boolean;

  constructor(public ConsultaProdutosService: ConsultaProdutosService, public router: Router) { }

  ngOnInit() {
    this.usuario = Globals.USUARIO;
    this.findAllProduto();
  }

  insert() {
    this.ConsultaProdutosService.insert(this.produto).subscribe((produtoOut: Produto) => {
      this.produto = produtoOut;
    }, err => {
      this.produtoNao = false;
    });
  }

  alterar() {
    console.log(this.produto);
    this.ConsultaProdutosService.update(this.produto).subscribe((produtoOut: Produto) => {
      this.produto = produtoOut;
      console.log(this.produto);
      this.ativarAlterar = false;
    }, err => {
      this.produtoNao = false;
    });
  }

  ativarUpdateProduto() {
    this.ativarAlterar = true;
  }

  findAllProduto() {
    this.ConsultaProdutosService.getAll().subscribe((produtosOut: Produto[]) => {
      this.produtos = produtosOut;
      this.showAll = true;
      this.showId = false;
      this.produtoNao = false;
    });
  }

  findIdProduto() {
    this.ConsultaProdutosService.getById(this.idProduto).subscribe((produtoOut: Produto) => {
        if (this.idProduto <= 0) {
          this.showAll = false;
          this.showId = false;
          this.produtoNao = true;
        } else {
          this.produto = produtoOut;
          this.showAll = false;
          this.showId = true;
          this.produtoNao = false;
        }
    });
  }
}

