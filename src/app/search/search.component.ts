import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import movieList from '../data/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  movies: any[] = [];
  constructor(private route: ActivatedRoute) {}
  defaultPoster: string =
    'https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg';

  ngOnInit(): void {
    let search_param =
      this.route.snapshot.paramMap.get('searchparam')?.toLowerCase() || '';
    console.log(search_param);
    if (
      search_param === undefined ||
      search_param === null ||
      search_param.length === 0
    ) {
      this.movies = movieList;
    } else {
      this.movies = movieList.filter(
        (m) =>
          m.title.toLowerCase().includes(search_param) ||
          m.actors.toLowerCase().includes(search_param) ||
          m.director.toLowerCase().includes(search_param)
      );
    }
    console.log(this.movies);
  }

  onImgError(event: any) {
    event.target.src = this.defaultPoster;
  }
}
