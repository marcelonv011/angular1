import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carro';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  roteador = inject(ActivatedRoute);
  carro!: Carro;
  mensagem: string = '';


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

  salvarCarro() {
    this.mensagem = 'Pessoa salva com sucesso!'; // Defina a mensagem desejada
  }


}
