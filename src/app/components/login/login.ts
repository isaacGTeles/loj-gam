import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatInputModule, MatButtonModule],
  template: `
    <div class="login-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Login - Loja de Games</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form (ngSubmit)="fazerLogin()">
            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput [(ngModel)]="email" name="email" type="email" required>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Senha</mat-label>
              <input matInput [(ngModel)]="senha" name="senha" type="password" required>
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit">Entrar</button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .login-container { display: flex; justify-content: center; align-items: center; height: 100vh; }
    mat-card { width: 400px; padding: 20px; }
    mat-form-field { width: 100%; margin-bottom: 10px; }
    button { width: 100%; }
  `]
})
export class LoginComponent {
  email = '';
  senha = '';
  private router = inject(Router);

  fazerLogin() {
    // Simulação simples de login para o Senai
    if (this.email === 'admin@teste.com' && this.senha === '123') {
      this.router.navigate(['/home']);
    } else {
      alert('Usuário ou senha incorretos!');
    }
  }
}