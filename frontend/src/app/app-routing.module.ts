import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* O lazy loading (“carregamento preguiçoso”) carrega os módulos sob demanda, ou seja, apenas quando requisitado, ou seja, ai invés de carregar todos os módulos o angular carrega apenas o módulo de um determinada rota */
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'animals',
    loadChildren: () =>
      import('./animals/animals.module').then((module) => module.AnimalsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
