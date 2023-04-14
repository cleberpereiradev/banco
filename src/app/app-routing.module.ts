import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ExcluirClienteComponent } from './pages/excluir-cliente/excluir-cliente.component';
import { EditarClienteComponent } from './pages/editar-cliente/editar-cliente.component';
import { CriarClienteComponent } from './pages/criar-cliente/criar-cliente.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/cadastrar', component: CriarClienteComponent},
  {path: 'clientes/editar/:cpf', component: EditarClienteComponent},
  {path: 'clientes/excluir/:cpf', component: ExcluirClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
