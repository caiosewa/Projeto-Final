import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string = "";
  private emailOk: boolean;
  private senha: any = "";
  private senhaOk: boolean;
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private _msgErroN: string = null;
  private _msgErroS: string = null;
  private _msgErroE: string = null;
  private _msgErroT: string = null;


  constructor() { }

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
    }
  }

  validarSenha() {
    if (this.senha.length < 10) {
      this._msgErroS = "Digite pelo menos 10 caracteres!";
      this.senhaOk = false;
    } else {
      this._msgErroS = null;
      this.senhaOk = true;
    }

  }

  enviar() {
    if (this.emailOk == true && this.senhaOk == true) {
      alert("Dados enviados com sucesso!");
      this.email = "";
      this.senha = "";
      this._msgErroS = "";
      this.emailOk = false;
      this.senhaOk = false;
    } else {
      alert("Favor preencher todos os campos corretamente!");
    }
  }
}
