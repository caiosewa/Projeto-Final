import { ConsultaUsuarioService } from './../service/consulta-usuario.service';
import { ConsultaProdutosService } from './../service/consulta-produtos.service';
import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Globals';
import { Usuario } from '../model/usuario';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css'],
  providers: [Globals]
})
export class AlterarProdutoComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "", true);

  produto: Produto = new Produto(0, "", "", "", null, null, true);
  produtos: Array<Produto> = new Array<Produto>();
  id: number;

  constructor(public ConsultaProdutosService: ConsultaProdutosService, public router: Router, public ConsultaUsuarioService: ConsultaUsuarioService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (localStorage.getItem("token")) {
      this.ConsultaUsuarioService.valida(localStorage.getItem("token")).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        Globals.USUARIO = usuario;
        this.ConsultaProdutosService.getAll().subscribe((produtosOut: Produto[]) => {
          this.produtos = produtosOut;
        });
      });
    } else {
      this.router.navigate(['login']);
    }
  }


  alterar() {
    this.ConsultaProdutosService.update(this.produto).subscribe((produtoOut: Produto) => {
      this.produto = produtoOut;
      alert("Alterado com Sucesso!");
    }, err => {
      alert("")
    });
    this.router.navigate(['/produtos']);
  }

  deletar() {
    this.ConsultaProdutosService.delete(this.id).subscribe(() => {
      alert("Deletado com Sucesso!");
      this.router.navigate(['/produtos']);
    }, err => {
      alert("Produto não deletado! Tente novamente");
    });
  }

  findIdProduto() {
    this.ConsultaProdutosService.getById(this.id).subscribe((produtoOut: Produto) => {
      this.produto = produtoOut;
    });

  }
}
