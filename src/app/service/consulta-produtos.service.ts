import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
