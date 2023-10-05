import { Component } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro [] = []

  constructor() {
    let livro1: Livro = new Livro();
    livro1.titulo = "eng de softw";
    livro1.autor = "marcelo";

    let livro2: Livro = new Livro();
    livro2.titulo = "backend"
    livro2.autor = "kaue";

    this.lista.push(livro1);
    this.lista.push(livro2);
  }

}
