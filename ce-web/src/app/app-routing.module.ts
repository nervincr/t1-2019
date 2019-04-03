import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LocalStorageComponent } from './components/local-storage/local-storage.component'; 
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component'; 
import { NoticiasUpsertComponent } from './components/noticias-upsert/noticias-upsert.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'local-storage', component: LocalStorageComponent },
  { path: 'noticias-list', component: NoticiasListComponent },
  { path: 'noticias/list', component: NoticiasListComponent },
  { path: '**', component: NoticiasListComponent },
  { path: 'noticias-upsert', component: NoticiasUpsertComponent },
  { path: 'noticias-edit/:id', component: NoticiasUpsertComponent },
  { path: 'noticias-insert', component: NoticiasUpsertComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}