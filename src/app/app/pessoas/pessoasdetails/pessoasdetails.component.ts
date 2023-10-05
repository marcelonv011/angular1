import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  roteador = inject(ActivatedRoute);
  pessoa!: Pessoa;


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

  salvarPessoa() {
    console.log('Pessoa salva:', this.pessoa);
  }
}
