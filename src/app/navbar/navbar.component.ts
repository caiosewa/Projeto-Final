import { Component, OnInit } from '@angular/core';
import { ConsultaUsuarioService } from '../service/consulta-usuario.service';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Token } from '../model/token';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [Globals]

})
export class NavbarComponent implements OnInit {

  usuario: Usuario = new Usuario(0,"","","","");

  emailOk: boolean = false;
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private _msgErroN: string = null;
  private _msgErroE: string = null;
  private _msgErroT: string = null;

  constructor(private router: Router, private ConsultaUsuarioService: ConsultaUsuarioService) { }

  log: boolean; // recebe o valor do log do login service,  sendo utilizado pelo button do menu component

  ngOnInit() {
    if(localStorage.getItem("login")){
      this.router.navigate(['/admin']);
    }
    if (localStorage.getItem("token")) {
      this.ConsultaUsuarioService.valida(localStorage.getItem("token")).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        Globals.USUARIO = usuario;
      });
      console.log("Você não está logado!!")
    }
  }


  validarEmail() {
    if (this.usuario.email.indexOf("@") == -1 || this.usuario.email.indexOf(".") == -1) {
      this._msgErroE = "Email inválido!";
      this.emailOk = false;
    }
    else {
      this._msgErroE = "";
      this.emailOk = true;
    }
  }

  enviar() {
    localStorage.clear();

    if (this.emailOk != true) {
      alert("Favor preencher todos os campos corretamente!");
    } else {
      this.ConsultaUsuarioService.consulta(this.usuario).subscribe((res: Token) => {
        localStorage.setItem("token", res.token);        
        this.validar();
      }, err => {
        console.log(`Erro cod: ${err.status}`);
        alert("Usuário ou senha incorreta!");
        this.router.navigate(['/login']);
      });
    }
  }

  validar() {
    this.ConsultaUsuarioService.valida(localStorage.getItem("token")).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
      Globals.USUARIO = usuario;
      localStorage.setItem("login", "click");
      window.location.reload();
    });
  }

  logout() {
    this.usuario.id = 0;
    this.usuario.email = "";
    this.usuario.nome = "";
    this.usuario.senha = "";
    this.usuario.telefone = "";
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
