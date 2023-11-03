import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Livro } from '../../models/livro';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from '../../services/livro.service';


@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {

  @Input() livro: Livro = new Livro();
  @Output() retorno = new EventEmitter<Livro>();
 
   modalService = inject(NgbModal);
   modalRef!: NgbModalRef;
 
   livroService = inject(LivroService);
 
 
   constructor() {
 
   }
 
   salvar() {
 
     this.livroService.create(this.livro).subscribe({
       next: livro => { 
         this.retorno.emit(livro);
       },
       error: erro => { 
         alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
         console.error(erro);
       }
     });
 
   }
 
 
   lancar(modal: any) {
     this.modalRef = this.modalService.open(modal, { size: 'lg' });
   }

}
