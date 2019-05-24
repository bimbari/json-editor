import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from './material-ui.module';

@NgModule({
  imports: [
    CommonModule, MaterialUiModule
  ],
  exports: [
    MaterialUiModule
  ], 
  declarations: []
})
export class StylesModule { }
