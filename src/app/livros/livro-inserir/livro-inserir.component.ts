import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.scss']
})
export class LivroInserirComponent {
  @Output()
  livroAdicionado = new EventEmitter();

  id: number;
  titulo: string
  autor: string;
  paginas: number;

  onAdicionarLivro(){
    const livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      paginas: this.paginas,
    }
    this.livroAdicionado.emit(livro);

    this.id = undefined;
    this.titulo = undefined;
    this.autor = undefined;
    this.paginas = undefined;
  }

}
