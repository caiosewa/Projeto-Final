import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private nome: string = "";
  private email: string = "";
  private tel: string = "";
  private senha: any = "";
  private csenha: any = "";
  private senhafraca: boolean = null;
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

  validacao() {

    if (this.nome == "" || this.email == "" || this.tel == "" || this.senha == "" || this.csenha == "") {
      alert('Preencha todos os campos!');
    }

    if (!this.filtro.test(this.nome)) {
      this.nome = "";
      this._msgErroN = "Nome inválido!";
    }
    else {
      this._msgErroN = "";
    }

    if (this.email.indexOf("@") == -1 && this.email.indexOf("@") > 1 || this.email.indexOf(".") == -1) {
      this.email = "";
      this._msgErroE = "Email inválido!";
    }
    else {
      this._msgErroE = "";
    }

    if (!this.num.test(this.tel)) {
      this.tel = "";
      this._msgErroT = "Apenas digitos!";
    }
    else {
      this._msgErroT = null;
    }

    if (this.tel.length < 11) {
      this.tel = "";
      this._msgErroT = "Digite 11 digitos!";
    }
    else {
      this._msgErroT = null;
    }

    if (this.senha.indexOf("@") == -1 || this.senha.indexOf(".") == -1) {
      this._msgErroS = "Senha fraca! Digite pelo menos um @";
      this.senhafraca = true;
    }
    else {
      this._msgErroS = null;
      this.senhafraca = false;
    }

    if (this.senha.length < 10) {
      this.senha = "";
      this._msgErroS = "Digite pelo menos 10 caracteres!";
    }
    else {
      this._msgErroS = null;
    }

    if (this.senha != this.csenha) {
      this.csenha = "";
      this._msgErroCS = "Senhas não iguais, por favor, digitar corretamente!";
    } else {
      this._msgErroCS = null;
    }

    if (this.nome != "" && this.email != "" && this.tel != "" && this.senha != "" && this.csenha != "") {
      alert("Dados enviados com sucesso!");
      this.nome = "";
      this.email = "";
      this.tel = "";
      this.senha = "";
      this.csenha = "";
      this.senhafraca = false;
    }
  }
}
