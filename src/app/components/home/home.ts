import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router'; // Importação do roteador
import { JogoService } from '../../services/jogo.service';
import { Jogo } from '../../models/jogo.model';

@Component({
  selector: 'app-home',
  standalone: true,
  // Adicionado RouterModule aqui para o botão funcionar
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule], 
  template: `
    <div class="container">
      <div class="header-home">
        <h1>Catálogo de Games</h1>
        <button mat-raised-button color="primary" routerLink="/cadastro">NOVO JOGO</button>
      </div>

      <div class="grid-jogos">
        <mat-card *ngFor="let jogo of listaJogos()" class="card-jogo">
          <img mat-card-image [src]="jogo.imagem" [alt]="jogo.titulo">
          <mat-card-content>
            <h3>{{ jogo.titulo }}</h3>
            <p>{{ jogo.categoria }}</p>
            <p class="preco">{{ jogo.preco | currency:'BRL' }}</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">DETALHES</button>
            <button mat-button color="warn" (click)="excluirJogo(jogo.id)">EXCLUIR</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .container { padding: 20px; }
    .header-home { 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      margin-bottom: 30px; 
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }
    .grid-jogos { 
      display: grid; 
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
      gap: 25px; 
    }
    .card-jogo { 
      max-width: 320px; 
      transition: transform 0.2s;
    }
    .card-jogo:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    img { height: 200px; width: 100%; object-fit: cover; }
    .preco { font-weight: bold; color: #2e7d32; font-size: 1.2em; }
    mat-card-actions { display: flex; justify-content: space-between; padding: 10px; }
  `]
})
export class HomeComponent implements OnInit {
  private jogoService = inject(JogoService);
  
  // Usando Signals para reatividade moderna (Angular 21)
  listaJogos = signal<Jogo[]>([]);

  ngOnInit(): void {
    this.carregarJogos();
  }

  // Busca os dados na API Node.js
  carregarJogos() {
    this.jogoService.ler().subscribe({
      next: (dados) => this.listaJogos.set(dados),
      error: (err) => console.error('Erro ao carregar jogos:', err)
    });
  }

  // Função para deletar um jogo do sistema
  excluirJogo(id: number | undefined) {
    if (id && confirm('Tem certeza que deseja excluir este game do catálogo?')) {
      this.jogoService.excluir(id).subscribe({
        next: () => {
          // Atualiza a tela removendo o item sem dar refresh
          this.listaJogos.update(jogos => jogos.filter(j => j.id !== id));
          alert('Jogo excluído com sucesso!');
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao excluir o jogo. Verifique se o servidor está rodando.');
        }
      });
    }
  }
}