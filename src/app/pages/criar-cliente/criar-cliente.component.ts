import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent {


  clienteForm = new FormGroup({
    cpf: new FormControl('',Validators.nullValidator),
    nome: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    rendimentoMensal: new FormControl(0, Validators.required),
    endereco: new FormGroup({
      rua: new FormControl('', Validators.required),
      numero: new FormControl(0, Validators.required),
      cep: new FormControl('', Validators.required)
    })
  })

  submitted = false;

  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  cadastrar() {
    const cliente: ICliente = this.clienteForm.value as ICliente;
    this.clientesService.cadastrar(cliente).subscribe((result) => {
      Swal.fire('Sucesso!', 'Cliente cadastrado com sucesso!', 'success');
      this.router.navigate(['/clientes'])
    }, (error) => {
      Swal.fire('Falha!', 'Dados para cadastro inválidos.', 'error');
      console.error(error);
    });
  }

  cancelar() {
    this.router.navigate(['/clientes'])
  }

}

