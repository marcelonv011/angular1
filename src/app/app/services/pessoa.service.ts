import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pessoa } from "../models/pessoa";

@Injectable({
    providedIn: 'root'
  })
  export class PessoaService{

  private readonly API: string = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.API}/`);
  }

  create(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${this.API}/`, pessoa);
  }

  getById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.API}/${id}`);
  }

  update(id: number, pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.API}/${id}`, pessoa);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
  }