import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { Livro } from '../../models/livro';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from '../../services/livro.service';


@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  @Output() retorno = new EventEmitter<Livro>();
  @Input() modoLancamento: boolean = false;

  lista: Livro[] = [];

  objetoSelecionadoParaEdicao: Livro = new Livro();
  indiceSelecionadoParaEdicao!: number;

  modalService = Inject(NgbModal);
  modalRef!: NgbModalRef;
  livroService = inject(LivroService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.livroService.listAll().subscribe({
      next: (livros) => {
        this.lista = livros;
      },
      error: (error) => {
        alert('Tratamiento de error de ejemplo. Observa el error en la consola.');
        console.error(error);
      }
    });
  }

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Livro();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, livro: Livro, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...livro };
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  excluir(livro: Livro, indice: number) {
    if (confirm('¿Seguro que deseja excluir este livro?')) {
      this.livroService.delete(livro.id).subscribe({
        next: () => {
          this.lista.splice(indice, 1);
          this.modalService.dismissAll();
        },
        error: (error) => {
          alert('Error ao excluir o livro. Consulte la consola para más detalles.');
          console.error(error);
        }
      });
    }
  }

  addOuEditarLivro(livro: Livro) {
    this.listAll();
    this.modalService.dismissAll();
  }

  lancamento(livro: Livro){
    this.retorno.emit(livro);
  }

}
