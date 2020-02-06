import { Usuario } from '../model/usuario';
import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
import { ConsultaUsuarioService } from '../service/consulta-usuario.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [Globals]
})
export class AdminComponent implements OnInit {

  usuario: Usuario = new Usuario(0,"","","","");

  constructor(private router: Router, private ConsultaUsuarioService: ConsultaUsuarioService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
     if (localStorage.getItem("token")) {
      this.ConsultaUsuarioService.valida(localStorage.getItem("token")).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        Globals.USUARIO = usuario;
      });
    } else {
      this.router.navigate(['login']);
    }
  }

  getAllUsuario() {
    this.ConsultaUsuarioService.getAll().subscribe((usuario: Usuario) => {
      this.usuario = usuario;
    }, err => {
    });
  }


}
