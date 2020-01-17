import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ConsultaProdutosService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get("http://cloud.professorisidro.com.br:8088/produtos");
  }
  
  getById(idProduto:number){
    return this.http.get(`http://cloud.professorisidro.com.br:8088/produtos/${idProduto}`);
  }

  // getAllUsuario(){
  //   return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/all`);
  // }

  // getByIdUsuario(id: number){
  //   return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/${id}`);
  // }

  // insertUsuario(usuario: Usuario){
  //   return this.http.post(`http://cloud.professorisidro.com.br:8088/usuario/new`, usuario);
  // }

  // updateUsuario(usuario: Usuario){
  //   return this.http.put(`http://cloud.professorisidro.com.br:8088/usuario/`, usuario);
  // }


}
