import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StylesModule } from '../styles/styles.module';

@NgModule({
  imports: [
    CommonModule, StylesModule
  ],
  exports: [
    DocumentComponent, HeaderComponent, FooterComponent
  ],
  declarations: [DocumentComponent, HeaderComponent, FooterComponent]
})
export class LayoutModule { }
