import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { HomeComponent } from './components/home/home';
import { CadastroJogoComponent } from './components/cadastro/cadastro-jogo';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroJogoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];