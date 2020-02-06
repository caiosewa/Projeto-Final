import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaProdutosService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get("http://localhost:8080/produto");
  }
  
  getById(id:number){
    return this.http.get(`http://localhost:8080/produto/${id}`);
  }

   insert(produto:Produto){
    return this.http.post(`http://localhost:8080/produto/`, produto);
  }

  update(produto:Produto){
     return this.http.put(`http://localhost:8080/produto/`, produto);
   }

}
