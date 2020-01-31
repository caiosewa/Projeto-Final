import { Usuario } from 'src/app/model/usuario';
import { ConsultaUsuarioService } from './../service/consulta-usuario.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../model/Globals';

//Modulos importados para o funcionamento da API de login
import { SocialUser } from "angularx-social-login";
import { SocialLoginModule, AuthServiceConfig, AuthService } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
//Fim dos modulos de login

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ Globals ]
})

export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  usuario: Usuario = new Usuario(0,"","","","");

  emailOk: boolean = false;
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private _msgErroN: string = null;
  private _msgErroE: string = null;
  private _msgErroT: string = null;


  constructor(private router: Router, private ConsultaUsuarioService: ConsultaUsuarioService,private authService: AuthService) { }


  //Funcao para logar no google
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  //funcao para logar no facebook
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
  //Funcao para deslogar do google
  signOut(): void {
    this.authService.signOut();
  }
    //Função para notificar quando o usuario realizar o login, carregar a foto, nome, email etc
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
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
        this.router.navigate(['admin']);
      }, err => {
        alert("Usuário ou senha incorreta!");
        this.router.navigate(['']);
      });
    }
  }
}