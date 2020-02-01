import { Usuario } from 'src/app/model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaUsuarioService {

  public log: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(`http://localhost:8080/usuario`);
  }

  getById(id: number){
    return this.http.get(`http://localhost:8080/usuario/${id}`);
  }

  insert(usuario: Usuario){
    return this.http.post(`http://localhost:8080/usuario`, usuario);
  }

  update(usuario: Usuario){
    return this.http.put(`http://localhost:8080/usuario`, usuario);
  }

  consulta(usuario: Usuario){
    return this.http.post(`http://localhost:8080/usuario/login`, usuario);
  }

}
