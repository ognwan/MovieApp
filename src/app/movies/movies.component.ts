import { Component, Input, OnInit } from '@angular/core';
import movieList from '../data/movie';

type MovieType = {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
};

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @Input() movies: MovieType[] = [];
  defaultPoster: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
  // movies: MovieType[] = movieList;
  constructor() {}

  ngOnInit(): void {}
}
