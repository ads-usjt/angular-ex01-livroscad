import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  livros = []
  onLivroAdicionado(livro){
    this.livros = [...this.livros, livro]
  }
}