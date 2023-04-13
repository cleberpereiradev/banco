import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CriarClienteComponent } from './pages/criar-cliente/criar-cliente.component';


import { HttpClientModule } from '@angular/common/http';

//import de funcionalidades para formulários reativos
import { ReactiveFormsModule } from '@angular/forms';
import { ExcluirClienteComponent } from './pages/excluir-cliente/excluir-cliente.component';
import { EditarClienteComponent } from './pages/editar-cliente/editar-cliente.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClientesComponent,
    CriarClienteComponent,
    ExcluirClienteComponent,
    EditarClienteComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
