import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//http://localhost:3004/cards
//http://localhost:3004/videos

const url1 = 'http://localhost:3004/cards';
const url2 = 'http://localhost:3004/videos';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getItem() {
    return this.http.get(url1);

  }

  getVideos() {
    return this.http.get(url2);
  }
}
