import { Component } from '@angular/core';
import movieList from './data/movie';
import genreList from './data/genre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  movies: any[] = movieList;
  genres: string[] = genreList;
  search: string = '';

  constructor() {}

  ngOnInit(): void {}

  searchByTitle() {
    if (this.search.length === 0) {
      this.movies = movieList;
    } else {
      this.movies = this.movies.filter(
        (m) =>
          m.title.toLowerCase().includes(this.search.toLowerCase()) ||
          m.actors.toLowerCase().includes(this.search.toLowerCase()) ||
          m.director.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
}
