import { Component, OnInit } from '@angular/core';
import { ItemModule } from 'src/app/model/item/item.module';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'traktotv-feed-videos',
  templateUrl: './feed-videos.component.html',
  styleUrls: ['./feed-videos.component.css']
})
export class FeedVideosComponent implements OnInit {
  
  listItem!: ItemModule[];
  item = {
    card: '',
    title: '',
    image: '',
    video: ''
  } as ItemModule;
  
  constructor(public itemService: ItemService) {}

  ngOnInit(): void {
    this.findVideos();
    //throw new Error('Method not implemented.');
  }

  findVideos(): void {
    this.itemService.getVideos().subscribe((data: any)=> {
      this.listItem = data;
    })
  }

}
