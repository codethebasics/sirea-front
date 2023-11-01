import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';

/**
 * Módulo que concentra os componentes responsáveis
 * pelo layout da aplicação
 * 
 * @since 11/2023
 * @author Bruno Carneiro
 */
@NgModule({
  declarations: [
    HeaderComponent,
    MenubarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MenubarComponent,
    FooterComponent
  ]
})
export class LayoutModule {
  
}
