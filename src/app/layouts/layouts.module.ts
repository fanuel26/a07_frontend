import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuListComponent
  ]
})
export class LayoutsModule { }
