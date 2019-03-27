import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LocalStorageComponent } from './components/local-storage/local-storage.component'; 

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'local-storage', component: LocalStorageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}