import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { ICliente } from '../interfaces/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  endpoint = "clientes";
  api = environment.api;


  constructor(private http: HttpClient) { }

  buscarTodosClientes () {
    return this.http.get<ICliente[]>(`${this.api}/${this.endpoint}`);
  }

  buscarClientePorCpf (cpf: string) {
    return this.http.get<ICliente>(`${this.api}/${this.endpoint}/${cpf}`)
  }

  cadastrar (cliente: ICliente) {
    return this.http.post(`${this.api}/${this.endpoint}`, cliente);
  }
  editarCliente(cliente: ICliente){
    return this.http.put<ICliente>(`${this.api}/${this.endpoint}/${cliente.cpf}`, cliente)
  }

  excluirCliente(cpf: string) : Observable<ICliente> {
    return this.http.delete<ICliente>(`${this.api}/${this.endpoint}/${cpf}`)
  }

}
