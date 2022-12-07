import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfAnimalsComponent } from './list-of-animals/list-of-animals.component';

const routes: Routes = [{ path: '', component: ListOfAnimalsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
