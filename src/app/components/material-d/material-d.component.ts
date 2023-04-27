import { Component, OnInit } from '@angular/core';
import { ItemModule } from 'src/app/model/item/item.module';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'traktotv-material-d',
  templateUrl: './material-d.component.html',
  styleUrls: ['./material-d.component.css']
})

export class MaterialDComponent implements OnInit {
  
  listItem!: ItemModule[];
  item = {
    card: '',
    title: '',
    video: ''    
  } as ItemModule;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.findItens();
    //throw new Error('Method not implemented.');
  }

  findItens(): void {
    this.itemService.getItem().subscribe((item: any)=> {
      this.listItem = item;
    });
  }
}
