import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPelis } from '../model/iPelis.interface';
@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private url: string='';
  private apiKey: string = '8c3ec381';
  constructor( private http: HttpClient) { }

  searchMovies(title: string, type: string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    return this.http.get<IPelis>(this.url).pipe(map(results => results['Search']));
  }
  getDetails(id:string){
    return this.http.get<IPelis>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}

