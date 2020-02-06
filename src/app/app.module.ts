import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*---------------- MDBootstrap ----------------------------- */
import { MDBBootstrapModule } from 'angular-bootstrap-md';
/* ------------------------------------------------------- */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaUsuarioService } from './service/consulta-usuario.service';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AdminComponent } from './admin/admin.component';
import { ComunidadesComponent } from './comunidades/comunidades.component';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { AlterarProdutoComponent } from './alterar-produto/alterar-produto.component';

/* Modulo do Material Angular que esta em pasta separada, afim de deixar o codigo mais Clean */
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RodapeComponent,
    ProdutosComponent,
    ContatoComponent,
    CadastroComponent,
    LoginComponent,
    SobrenosComponent,
    CarrinhoComponent,
    PagamentoComponent,
    MenuLateralComponent,
    HomeComponent,
    FaqComponent,
    AdminComponent,
    ComunidadesComponent,
    InserirProdutoComponent,
    AlterarProdutoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule

  ],
  providers: [ ConsultaUsuarioService ],
  bootstrap: [AppComponent],



})
export class AppModule { }
 ConsultaUsuarioService 