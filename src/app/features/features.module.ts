import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { StylesModule } from '../styles/styles.module';



@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule,
    StylesModule
  ],
  exports: [
    JsonEditorComponent
  ],
  declarations: [JsonEditorComponent]
})
export class FeaturesModule { }
