import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Globals';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import { ConsultaUsuarioService } from '../service/consulta-usuario.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [Globals]
})
export class AdminComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: Router,private ConsultaUsuarioService: ConsultaUsuarioService) { }

  ngOnInit() {
    if (Globals.USUARIO == undefined) {
      this.router.navigate(['/login']);
    } else {
      this.usuario = Globals.USUARIO;
    }
  }

  getAllUsuario(){
  this.ConsultaUsuarioService.getAll().subscribe((usuario: Usuario) => {
    this.usuario = usuario;
  }, err => {
  });
}



}
