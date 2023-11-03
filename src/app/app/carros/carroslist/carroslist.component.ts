import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CarroService } from '../../services/carro.service';
import { Carro } from '../../models/carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  @Output() retorno = new EventEmitter<Carro>();
  @Input() modoLancamento: boolean = false;

  lista: Carro[] = [];

  objetoSelecionadoParaEdicao: Carro = new Carro();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  carroService = inject(CarroService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.carroService.listAll().subscribe({
      next: (carros) => {
        this.lista = carros;
      },
      error: (error) => {
        alert('Tratamiento de error de ejemplo. Observa el error en la consola.');
        console.error(error);
      }
    });
  }

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Carro();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, carro: Carro, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...carro };
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  excluir(carro: Carro, indice: number) {
    if (confirm('¿Seguro que deseja excluir este carro?')) {
      this.carroService.delete(carro.id).subscribe({
        next: () => {
          this.lista.splice(indice, 1);
          this.modalService.dismissAll();
        },
        error: (error) => {
          alert('Error ao excluir o carro. Consulte la consola para más detalles.');
          console.error(error);
        }
      });
    }
  }

  addOuEditarCarro(carro: Carro) {
    this.listAll();
    this.modalService.dismissAll();
  }

  lancamento(carro: Carro){
    this.retorno.emit(carro);
  }

}
