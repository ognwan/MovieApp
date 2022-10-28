import { Component, OnInit } from '@angular/core';
import genreList from '../data/genre';
import movieList from '../data/movie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  genres: string[] = genreList;
  movies: any[] = movieList;
  search: string = '';
  constructor() {}

  ngOnInit(): void {}

  searchByTitle() {
    this.movies.filter((m) => m.title === this.search);
  }
}
