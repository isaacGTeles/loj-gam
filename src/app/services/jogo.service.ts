import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jogo } from '../models/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  private readonly API = 'http://localhost:3000/jogos';
  private http = inject(HttpClient);

  // Lista todos os jogos
  ler(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(this.API);
  }

  // Cadastra um novo jogo
  cadastrar(jogo: Jogo): Observable<Jogo> {
    return this.http.post<Jogo>(this.API, jogo);
  }

  // Adicione este método dentro da classe JogoService
excluir(id: number): Observable<void> {
  return this.http.delete<void>(`${this.API}/${id}`);
}
}