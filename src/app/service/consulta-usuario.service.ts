import { Usuario } from 'src/app/model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaUsuarioService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/all`);
  }

  getById(id: number){
    return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/${id}`);
  }

  insert(usuario: Usuario){
    return this.http.post(`http://cloud.professorisidro.com.br:8088/usuario/new`, usuario);
  }

  update(usuario: Usuario){
    return this.http.put(`http://cloud.professorisidro.com.br:8088/usuario/`, usuario);
  }

}
