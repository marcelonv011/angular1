import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Carro } from "../models/carro";


@Injectable({
    providedIn: 'root'
  })
  export class CarroService{
    private readonly API: string = 'http://localhost:8080/carros';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.API}/`);
  }

  create(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(`${this.API}/`, carro);
  }

  getById(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.API}/${id}`);
  }

  update(id: number, carro: Carro): Observable<Carro> {
    return this.http.put<Carro>(`${this.API}/${id}`, carro);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
  }