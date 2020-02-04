import { Component, OnInit } from '@angular/core';
import { ConsultaUsuarioService } from '../service/consulta-usuario.service';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";

import { SocialUser } from "angularx-social-login";
import { Usuario } from 'src/app/model/usuario';
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [Globals]

})
export class NavbarComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  usuario: Usuario = new Usuario(0, "", "", "", "");

  emailOk: boolean = false;
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private _msgErroN: string = null;
  private _msgErroE: string = null;
  private _msgErroT: string = null;

  constructor(private router: Router, private ConsultaUsuarioService: ConsultaUsuarioService, private login: ConsultaUsuarioService, private authService: AuthService) { }

  nome: string;
  log: boolean; // recebe o valor do log do login service,  sendo utilizado pelo button do menu component

  //Funcao para logar no google
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  //funcao para logar no facebook
  /* signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
    //Funcao para deslogar do google e facebook */
  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.login.log.subscribe(value => {
      this.log = value;
      this.nome = localStorage.getItem("nome");
    });
    /* metodo para subscrever os dados do usuario logado
      pelo facebook e google
    */
    this.authService.authState.subscribe((user) => {
      ''
      this.user = user;
      this.loggedIn = (user != null);
    });
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
    if (this.emailOk != true) {
      alert("Favor preencher todos os campos corretamente!");
    } else {
      this.ConsultaUsuarioService.consulta(this.usuario).subscribe((usuario: Usuario) => {
        Globals.USUARIO = usuario;
        localStorage.setItem("nome", Globals.USUARIO.nome);
        this.ConsultaUsuarioService.log.next(true);
        this.router.navigate(['admin']);
      }, err => {
        alert("Usuário ou senha incorreta!");
        this.router.navigate(['']);
      });
    }
  }


  logout() {
    this.login.log.next(false);
    Globals.USUARIO = undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
