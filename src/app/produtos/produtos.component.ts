import { Globals } from './../model/Globals';
import { Usuario } from 'src/app/model/Usuario';
import { ConsultaProdutosService } from './../service/consulta-produtos.service';
import { Produto } from '../model/produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  idProduto: number;
  item: Produto = new Produto(0, null, null, null, null, null);
  itens: Array<Produto> = new Array<Produto>();
  showId: boolean;
  showAll: boolean;
  produtoNao: boolean;
  usuario: Usuario = Globals.USUARIO;

  constructor(public ConsultaProdutosService: ConsultaProdutosService, public router:Router) { }

  ngOnInit() {
   
  }

  findAllProduto() {
    this.ConsultaProdutosService.getAll().subscribe((itensOut: Produto[]) => {
      this.itens = itensOut;
      this.showAll = true;
      this.showId = false;
      this.produtoNao = false;
    });
  }

  btnAll() {
    this.findAllProduto();
  }

  findIdProduto() {
    this.ConsultaProdutosService.getById(this.idProduto).subscribe((itemOut: Produto) => {
      if (this.idProduto == 0) {
        this.showAll = false;
        this.showId = false;
        this.produtoNao = true;
      } else {
      this.item = itemOut;
      this.showAll = false;
      this.showId = true;
      this.produtoNao = false;
    }});
  }



}

