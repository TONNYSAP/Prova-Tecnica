import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { TraktoComponent } from './components/trakto/trakto.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialDComponent } from './components/material-d/material-d.component';
import { FeedCardsComponent } from './components/material-d/feed-cards/feed-cards.component';
import { FeedVideosComponent } from './components/material-d/feed-videos/feed-videos.component';
import { BlackboardComponent } from './components/blackboard/blackboard.component';
import { MaterialListComponent } from './components/material-list/material-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    TraktoComponent,
    MenuComponent,
    MaterialDComponent,
    FeedCardsComponent,
    FeedVideosComponent,
    BlackboardComponent,
    MaterialListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MdbCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
