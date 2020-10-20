import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.scss']
})
export class LivrosListaComponent {

  @Input() livros = [];

}
