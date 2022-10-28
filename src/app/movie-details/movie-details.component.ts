import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import movieList from '../data/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let search_param = this.route.snapshot.paramMap.get('id') || '';
    this.movie = movieList.find((m) => m.id.toString() === search_param);
    console.log(this.movie);
  }
}
