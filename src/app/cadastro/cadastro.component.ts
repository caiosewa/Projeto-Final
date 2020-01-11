import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private nome: string = "";
  private nomeOk: boolean;
  private email: string = "";
  private emailOk: boolean;
  private tel: string = "";
  private telOk: boolean;
  private senha: any = "";
  private senhaOk: boolean;
  private csenha: any = "";
  private csenhaOk: boolean;
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private _msgErroN: string = null;
  private _msgErroS: string = null;
  private _msgErroCS: string = null;
  private _msgErroE: string = null;
  private _msgErroT: string = null;
 

  constructor() { }

  ngOnInit() {
  }
  

  validarNome() {

    if (!this.filtro.test(this.nome)) {
      this.nome = "";
      this._msgErroN = "Nome inválido!";
      this.nomeOk = false;
    }
    else {
      this._msgErroN = "";
      this.nomeOk = true;
    }
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

  validarTel() {

    if (!this.num.test(this.tel)) {
      this.tel = "";
      this.telOk = false;
    } else if (this.tel.length < 11) {
      this._msgErroT = "Digite 11 digitos!";
      this.telOk = false;
    } else {
      this._msgErroT = null;
      this.telOk = true;
    }

  }

  validarSenha() {
    if (this.senha.length < 10) {
      this._msgErroS = "Digite pelo menos 10 caracteres!";
      this.senhaOk = false;
    } else if (this.senha.indexOf("@") == -1) {
      this._msgErroS = "Senha fraca";
      this.senhaOk = true;
    } else {
      this._msgErroS = null;
      this.senhaOk = true;
    }

  }

  validarCsenha() {
    if (this.senha != this.csenha) {
      this._msgErroCS = "Senhas não são iguais!";
      this.csenhaOk = false;
    } else {
      this._msgErroCS = null;
      this.csenhaOk = true;
    }
  }

  enviar() {
    if (this.nomeOk == true && this.emailOk == true && this.telOk == true && this.senhaOk == true && this.csenhaOk == true) {
      alert("Dados enviados com sucesso!");
      this.nome = "";
      this.email = "";
      this.tel = "";
      this.senha = "";
      this.csenha = "";
      this._msgErroS = "";
      this.nomeOk = false;
      this.emailOk = false;
      this.telOk = false;
      this.senhaOk = false;
      this.csenhaOk = false;
    } else {
      alert("Favor preencher todos os campos corretamente!");
    }

  }
}