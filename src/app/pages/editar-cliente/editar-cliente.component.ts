import { NonNullAssert } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {

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
  });

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

  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private router: Router) {}

    clienteCpf = '';

  ngOnInit(): void {
      this.clienteCpf = String(this.route.snapshot.paramMap.get('cpf'));
      console.log(this.clienteCpf)
      if(this.clienteCpf){
        this.clienteForm.get('cpf')?.disable();
        this.clientesService.buscarClientePorCpf(String(this.clienteCpf)).subscribe((cliente: ICliente) => {
          this.clienteForm.setValue({
            cpf: cliente.cpf,
            nome: cliente.nome,
            telefone: cliente.telefone,
            endereco: {
              rua: cliente.endereco.rua,
              numero: cliente.endereco.numero,
              cep: cliente.endereco.cep
            },
            rendimentoMensal: cliente.rendimentoMensal
          })
        });
      }
    }


  editarC() {
    this.clientesService.editarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['/clientes']);
    })
  }

  editar() {
    const cliente: ICliente = this.clienteForm.getRawValue() as ICliente;
    this.clientesService.editarCliente(cliente).subscribe((result) => {

      Swal.fire('Sucesso!', 'Cliente editado com sucesso!', 'success');
      this.router.navigate(['/clientes'])

    }, (error) => {
      Swal.fire('Falha!', 'Dados para cadastro inválidos.', 'error');
      console.error(error);
    });
  }

  cancelar() {
    this.router.navigate(['/clientes']);
  }


}
