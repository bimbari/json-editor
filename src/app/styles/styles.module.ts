import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from './material-ui.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule, MaterialUiModule, NgbModule
  ],
  exports: [
    MaterialUiModule, NgbModule
  ], 
  declarations: []
})
export class StylesModule { }
