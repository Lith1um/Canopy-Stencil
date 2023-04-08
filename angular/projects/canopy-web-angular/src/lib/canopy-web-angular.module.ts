import { DIRECTIVES } from './stencil-generated';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class CanopyAngularModule {}