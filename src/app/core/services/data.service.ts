import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Movie, Row } from '../models/movie';

interface MoviesPayload {
  hero: Movie;
  rows: Row[];
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);

  getHome(): Observable<{hero: Movie; rows: Row[]}> {
    return this.http.get<MoviesPayload>('assets/mock/movies.json');
  }

  getById(id: number): Observable<Movie | undefined> {
    return this.http.get<MoviesPayload>('assets/mock/movies.json')
      .pipe(map(p => p.rows.flatMap(r => r.items).find(m => m.id === id)));
  }

  search(term: string): Observable<Movie[]> {
    return this.http.get<MoviesPayload>('assets/mock/movies.json')
      .pipe(map(p => p.rows.flatMap(r => r.items)
        .filter(m => m.title.toLowerCase().includes(term.toLowerCase()))));
  }
}
