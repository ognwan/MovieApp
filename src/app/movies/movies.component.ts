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
  isFeatured?: boolean;
};

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  defaultPoster: string =
    'https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg';
  movies: MovieType[] = movieList.filter((m) => m.isFeatured);
  constructor() {}

  ngOnInit(): void {}
}
