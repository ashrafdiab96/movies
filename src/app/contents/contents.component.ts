import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  faCoffee = faCoffee;
  moviesContainer: any[];
  imgSrc = 'https://image.tmdb.org/t/p/original';
  pages: number[] = [];
  currentPage = 1;
  firstPage = 1;
  lastPage = 10;
  changePage(pageNum) {
    this.currentPage = pageNum;
    this._MoviesService.getMovies(this.currentPage).subscribe(data => {
      this.moviesContainer = data.results;
    });
  }
  nextPage() {
    if (this.currentPage === this.lastPage) {
      alert('This is the last page');
    } else {
      this.currentPage++;
      this._MoviesService.getMovies(this.currentPage).subscribe(data => {
        this.moviesContainer = data.results;
      });
    }
  }
  prevPage() {
    if (this.currentPage === this.firstPage) {
      alert('This is the first page');
    } else {
      this.currentPage--;
      this._MoviesService.getMovies(this.currentPage).subscribe(data => {
        this.moviesContainer = data.results;
      });
    }
  }

  constructor(public _MoviesService: MoviesService) {
    _MoviesService.getMovies(this.currentPage).subscribe(data => {
      this.moviesContainer = data.results;
    });
    for (let i = 1; i <= 10; i++) {
      this.pages.push(i);
    }
  }

  ngOnInit() {
  }

}
