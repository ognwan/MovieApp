import { Component, OnInit } from '@angular/core';
import movieList from '../data/movie';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit {
  defaultPoster: string =
    'https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg';
  movies: any[] = movieList.filter((m) => m.isFeatured);
  constructor() {}

  ngOnInit(): void {}
}
