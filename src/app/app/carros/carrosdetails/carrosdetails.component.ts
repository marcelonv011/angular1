import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carro } from '../../models/carro';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CarroService } from '../../services/carro.service';


@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  @Input() carro: Carro = new Carro();
  @Output() retorno = new EventEmitter<Carro>();
 
   modalService = inject(NgbModal);
   modalRef!: NgbModalRef;
 
   carroService = inject(CarroService);
 
 
   constructor() {
 
   }
 
   salvar() {
 
     this.carroService.create(this.carro).subscribe({
       next: carro => { 
         this.retorno.emit(carro);
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
