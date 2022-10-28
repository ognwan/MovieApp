import { Component, OnInit } from '@angular/core';
import genreList from '../data/genre';
import movieList from '../data/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  genres: string[] = genreList;
  movies: any[] = movieList;
  search: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchByTitle() {
    this.router.navigateByUrl('/search/' + this.search);
    // this.movies.filter((m) => m.title === this.search);
  }
}
