import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';


const routes: Routes = [
  {path: 'primeiro-componente', component: PrimeiroComponenteComponent},
  {path: 'segundo-componente', component: SegundoComponenteComponent},
  {path: 'terceiro-componente', component: TerceiroComponenteComponent},
  {path: 'teste-componente', component: NgIfNgForComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
