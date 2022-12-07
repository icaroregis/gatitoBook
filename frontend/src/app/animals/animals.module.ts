import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListOfAnimalsComponent } from './list-of-animals/list-of-animals.component';

@NgModule({
  declarations: [ListOfAnimalsComponent],
  imports: [CommonModule, AnimalsRoutingModule],
})
export class AnimalsModule {}
