import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  @Input() pessoa: Pessoa = new Pessoa();
  @Output() retorno = new EventEmitter<Pessoa>();
 
   modalService = inject(NgbModal);
   modalRef!: NgbModalRef;
 
   pessoaService = inject(PessoaService);
 
 
   constructor() {
 
   }
 
   salvar() {
 
     this.pessoaService.create(this.pessoa).subscribe({
       next: pessoa => { 
         this.retorno.emit(pessoa);
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
