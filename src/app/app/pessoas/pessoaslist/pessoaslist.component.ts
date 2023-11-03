import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from '../../services/pessoa.service';


@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  @Output() retorno = new EventEmitter<Pessoa>();
  @Input() modoLancamento: boolean = false;

  lista: Pessoa[] = [];

  objetoSelecionadoParaEdicao: Pessoa = new Pessoa();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  pessoaService = inject(PessoaService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.pessoaService.listAll().subscribe({
      next: (pessoas) => {
        this.lista = pessoas;
      },
      error: (error) => {
        alert('Tratamiento de error de ejemplo. Observa el error en la consola.');
        console.error(error);
      }
    });
  }

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Pessoa();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, pessoa: Pessoa, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...pessoa };
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  excluir(pessoa: Pessoa, indice: number) {
    if (confirm('¿Seguro que deseja excluir esta pessoa?')) {
      this.pessoaService.delete(pessoa.id).subscribe({
        next: () => {
          this.lista.splice(indice, 1);
          this.modalService.dismissAll();
        },
        error: (error) => {
          alert('Error ao excluir a pessoa. Consulte la consola para más detalles.');
          console.error(error);
        }
      });
    }
  }

  addOuEditarPessoa(pessoa: Pessoa) {
    this.listAll();
    this.modalService.dismissAll();
  }

  lancamento(pessoa: Pessoa){
    this.retorno.emit(pessoa);
  }

  

  }
