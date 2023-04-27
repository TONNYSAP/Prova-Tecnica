import { Component, OnInit } from '@angular/core';
import { ItemModule } from 'src/app/model/item/item.module';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'traktotv-feed-cards',
  templateUrl: './feed-cards.component.html',
  styleUrls: ['./feed-cards.component.css']
})

export class FeedCardsComponent implements OnInit {

  listItem!: ItemModule[];
  item = {
    card: '',
    title: '',
    image: '',
    video: ''
  } as ItemModule;

  constructor(public itemService: ItemService) {}
 

  ngOnInit(): void {
    this.findItens();
    //throw new Error('Method not implemented.');
  }

  findItens(): void {
    this.itemService.getItem().subscribe((data: any)=> {
      this.listItem = data;
    })
  }
}
