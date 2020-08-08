import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient: HttpClient) {}

  getMovies(pageNum): Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/all/day?api_key=66d42eace3ba8c9e20e33bbc3ac948e7&page=' + pageNum);
  }


}
