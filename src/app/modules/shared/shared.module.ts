import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
