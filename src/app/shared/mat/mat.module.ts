import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';






const modules: any[] =[MatButtonModule,MatCardModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[modules]
})
export class MatModule { }
