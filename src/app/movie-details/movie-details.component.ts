import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute, public _MoviesService: MoviesService) { }
  myParam: number;
  movieDetail: any = {};
  imgSrc = 'https://image.tmdb.org/t/p/original';


  ngOnInit() {
    this._ActivatedRoute.params.subscribe(params => {this.myParam = params['id']; });
    this._MoviesService.getMovies(1).subscribe(data => this.movieDetail = data.results[this.myParam]);
  }

}
