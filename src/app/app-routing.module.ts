import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import genre from './data/genre';
import { GenreComponent } from './genre/genre.component';
import { LatestComponent } from './latest/latest.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'allmovies',
    component: AllMoviesComponent,
  },
  {
    path: 'genre/:genre',
    component: GenreComponent,
  },
  {
    path: 'actors',
    component: LatestComponent,
  },
  {
    path: 'search/:searchparam',
    component: SearchComponent,
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  MoviesComponent,
  GenreComponent,
  LatestComponent,
  SearchComponent,
  MovieDetailsComponent,
];
