import { Component, OnInit } from '@angular/core';
import { ConsultaUsuarioService } from '../service/consulta-usuario.service';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;


  constructor(private router: Router, private login: ConsultaUsuarioService, private authService: AuthService) { }

  nome: string;
  log: boolean; // recebe o valor do log do login service,  sendo utilizado pelo button do menu component

    //Funcao para deslogar do google e facebook */
    signOut(): void {
      this.authService.signOut();
    }

  ngOnInit() {
    this.login.log.subscribe(value => {
      this.log = value;
      this.nome = localStorage.getItem("nome");
    });
    /* metodo para subscrever os dados do usuario logado
      pelo facebook e google
    */  
    this.authService.authState.subscribe((user) => {''
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  logout(){
    this.login.log.next(false);
    Globals.USUARIO = undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
