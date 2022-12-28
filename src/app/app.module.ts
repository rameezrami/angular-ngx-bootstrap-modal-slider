import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommentsSliderComponent } from './comments-slider/comments-slider.component';

@NgModule({
  declarations: [AppComponent, CommentsSliderComponent],
  imports: [BrowserModule, ModalModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
