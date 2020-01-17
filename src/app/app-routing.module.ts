import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastroComponent } from './cadastro/cadastro.component';



const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'sobrenos', component:SobrenosComponent},
  {path:'contato', component:ContatoComponent},
  {path:'produtos', component:ProdutosComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'login', component:LoginComponent} ,
  {path:'faq', component:FaqComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
