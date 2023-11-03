import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Livro } from "../models/livro";

@Injectable({
    providedIn: 'root'
  })
  export class LivroService{
    private readonly API: string = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.API}/`);
  }

  create(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(`${this.API}/`, livro);
  }

  getById(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.API}/${id}`);
  }

  update(id: number, livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.API}/${id}`, livro);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
  }