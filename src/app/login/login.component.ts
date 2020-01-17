import { Usuario } from 'src/app/model/usuario';
import { ConsultaUsuarioService } from './../service/consulta-usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../model/Globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ Globals ]
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario(0,"","","","");

  emailOk: boolean = false;
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private _msgErroN: string = null;
  private _msgErroE: string = null;
  private _msgErroT: string = null;


  constructor(private router: Router, private ConsultaUsuarioService: ConsultaUsuarioService) { }

  ngOnInit() {
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
