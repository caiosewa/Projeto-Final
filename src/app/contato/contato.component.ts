import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  private nome: string = "";
  private email: string  = "";
  private tel: string  = "";
  private mensagem: any  = "";
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private _msgErroN: string = null;
  private _msgErroS: string = null;
  private _msgErroE: string = null;
  private _msgErroT: string = null;

  constructor() { }

  ngOnInit() {
  }

  validacao() {

    if (this.nome == "" || this.email == "" || this.tel == "" || this.mensagem == "") {
      alert('Preencha todos os campos!');
    }
    
    if (!this.filtro.test(this.nome)) {
      this.nome = "";
      this._msgErroN = "Nome inválido!";
    }
    else {
      this._msgErroN = null;
    }

    if (this.email.indexOf("@") == -1 && this.email.indexOf("@") > 1 || this.email.indexOf(".") == -1) {
      this.email = "";
      this._msgErroE = "Email inválido!";
    }
    else {
      this._msgErroE = "";
    }

    if(!this.num.test(this.tel)){
      this.tel = "";
      this._msgErroT = "Apenas digitos!";
    }
    else{
      this._msgErroT = null;
    }
    
    if(this.tel.length < 11){
      this.tel = "";
      this._msgErroT = "Digite 11 digitos!";
    }
    else{
      this._msgErroT = null;
    } 

    if (this.nome != "" && this.email != "" && this.tel != "" && this.mensagem != "") {
      alert("Dados enviados com sucesso!");
      this.nome = "";
      this.email = "";
      this.tel = "";
      this.mensagem = "";
    }
    
  }
}