import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';


@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {


  lista: Pessoa [] = []

  constructor() {
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.nome = "kaue";
    pessoa1.idade = 54;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.nome = "gustavo";
    pessoa2.idade = 24;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.nome = "marcelo";
    pessoa3.idade = 25;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.nome = "rodrigo";
    pessoa4.idade = 29;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.nome = "camila";
    pessoa5.idade = 33;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.nome = "mayra";
    pessoa6.idade = 19;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.nome = "marianela";
    pessoa7.idade = 39;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.nome = "mia";
    pessoa8.idade = 35;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.nome = "jazmin";
    pessoa9.idade = 11;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.nome = "yesica";
    pessoa10.idade = 31;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);
  }

}
