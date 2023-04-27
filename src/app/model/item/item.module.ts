import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ItemModule { 

  public id!: number;
  public "card"!: string;
  public "title"!: string;
  public "image"!: string;
  public "video"!: string;
}
