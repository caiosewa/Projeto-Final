import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


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
import { ListarComponent } from './components/listar/listar.component';
import { AlterarComponent } from './components/alterar/alterar.component';
import { ConsultaUsuarioService } from './service/consulta-usuario.service';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FaqComponent } from './faq/faq.component';
import { AdminComponent } from './admin/admin.component';


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
    ListarComponent,
    AlterarComponent,
    HomeComponent,
    FaqComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [ConsultaUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
