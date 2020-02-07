import { ConsultaProdutosService } from './../service/consulta-produtos.service';
import { Produto } from './../model/produto';
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

  usuario: Usuario = new Usuario(0, "", "", "", "", 1);

  produto: Produto = new Produto(0, "", "", "", null, null, 1);
  id: number;

  produtos: Array<Produto> = new Array<Produto>();
  produtoList1=[];
  produtoList2=[];

  constructor(private router: Router, public ConsultaProdutosService: ConsultaProdutosService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.usuario = Globals.USUARIO;
    this.colocarList1();
    this.colocarList2();
  }

  colocarList1() {
    for (let i = 1; i < 4; i++){
      this.id = i;
      this.ConsultaProdutosService.getById(this.id).subscribe((produtoOut: Produto) => {
        this.produtoList1.push(produtoOut);
    });
    }
  }
 
   colocarList2() {
     for (let i = 4; i < 7; i++){
       this.ConsultaProdutosService.getById(i).subscribe((produtoOut: Produto) => {
        this.produtoList2.push(produtoOut);
     });
     }
   } 

  findIdProduto() {
    this.ConsultaProdutosService.getById(this.id).subscribe((produtoOut: Produto) => {
        this.produto = produtoOut;
    });
  }

  mostrar(produto: Produto) {
    Globals.id = produto.id;
    this.irProdutos();
}

  irProdutos() {
    this.router.navigate(['produtos']);
  }

}
