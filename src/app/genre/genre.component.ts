import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import movieList from '../data/movie';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  title: string = '';
  movies: any = [];
  defaultPoster: string =
    'https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let search_param = this.route.snapshot.paramMap.get('genre') || '';
    this.movies = movieList.filter((m) => m.genres.includes(search_param));
    this.title = search_param;
  }
}
