import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { StylesModule } from '../styles/styles.module';
import { JsonTreeComponent } from './json-tree/json-tree.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StylesModule
  ],
  providers: [],
  exports: [
    JsonEditorComponent
  ],
  declarations: [JsonEditorComponent, JsonTreeComponent]
})
export class FeaturesModule { }
