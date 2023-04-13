import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
  styleUrls: ['./excluir-cliente.component.css']
})
export class ExcluirClienteComponent {
  cliente: ICliente = {
    cpf: "",
    nome: '',
    telefone: '',
    endereco: {
      rua: '',
      numero: 0,
      cep: ''
    },
    rendimentoMensal: 0
  }

  constructor (
    private clientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      const cpf = this.route.snapshot.paramMap.get('cpf')
      this.clientesService.buscarClientePorCpf(String(cpf)).subscribe((result) => {
        this.cliente = result;
      })
    }

    excluirCliente() {
      if(this.cliente.cpf) {
        this.clientesService.excluirCliente(this.cliente.cpf).subscribe(() => {
        })
        this.router.navigate(['/clientes']);
      }
    }

    cancelar() {
      this.router.navigate(['/clientes']);
    }

}
