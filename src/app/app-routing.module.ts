import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import genre from './data/genre';
import { GenreComponent } from './genre/genre.component';
import { LatestComponent } from './latest/latest.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'genre',
    component: GenreComponent,
  },
  {
    path: 'latest',
    component: LatestComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
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
];
