import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { JogoService } from '../../services/jogo.service';
import { Jogo } from '../../models/jogo.model';

@Component({
  selector: 'app-cadastro-jogo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatCardModule, MatInputModule, MatButtonModule],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Cadastrar Novo Jogo</mat-card-title>
        </mat-card-header>
        
        <mat-card-content>
          <form (ngSubmit)="salvar()">
            <mat-form-field appearance="outline">
              <mat-label>Título</mat-label>
              <input matInput [(ngModel)]="novoJogo.titulo" name="titulo" required>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Categoria</mat-label>
              <input matInput [(ngModel)]="novoJogo.categoria" name="categoria" required>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Preço</mat-label>
              <input matInput type="number" [(ngModel)]="novoJogo.preco" name="preco" required>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>URL da Imagem</mat-label>
              <input matInput [(ngModel)]="novoJogo.imagem" name="imagem">
            </mat-form-field>

            <div class="actions">
              <button mat-raised-button color="primary" type="submit">Salvar Jogo</button>
              <button mat-button type="button" routerLink="/home">Cancelar</button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container { display: flex; justify-content: center; padding: 20px; }
    mat-card { width: 100%; max-width: 500px; }
    mat-form-field { width: 100%; margin-bottom: 10px; }
    .actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px; }
  `]
})
export class CadastroJogoComponent {
  private jogoService = inject(JogoService);
  private router = inject(Router);

  novoJogo: Jogo = {
    titulo: '',
    categoria: '',
    preco: 0,
    imagem: ''
  };

  salvar() {
    this.jogoService.cadastrar(this.novoJogo).subscribe({
      next: () => {
        alert('Jogo cadastrado com sucesso!');
        this.router.navigate(['/home']);
      },
      error: (err: any) => console.error('Erro ao cadastrar:', err)
    });
  }
}