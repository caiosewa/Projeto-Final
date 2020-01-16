import { ConsultaUsuarioService } from './../service/consulta-usuario.service';
import { Login } from './../model/login';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login("", "");

  private email: string = "";
  private emailOk: boolean;
  private senha: any = "";
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private _msgErroN: string = null;
  private _msgErroE: string = null;
  private _msgErroT: string = null;


  constructor(private route: ActivatedRoute, private ConsultaUsuarioService: ConsultaUsuarioService) { }

  ngOnInit() {
  }

  validarEmail() {
    if (this.email.indexOf("@") == -1 || this.email.indexOf(".") == -1) {
      this._msgErroE = "Email inválido!";
      this.emailOk = false;
    }
    else {
      this._msgErroE = "";
      this.emailOk = true;
      this.login.email = this.email;
    }
  }

  validarSenha() {
    this.login.senha = this.senha;
  }

  enviar() {
    if (this.emailOk != true) {
      alert("Favor preencher todos os campos corretamente!");
    } else {
      this.ConsultaUsuarioService.consulta(this.login).subscribe((login: Login) => {
        this.login = login;
        this.email = "";
        this.senha = "";
        alert("Login realizado!");
      }, err => {
        alert("Usuário ou senha incorreta!");
      });
    }
  }
}
