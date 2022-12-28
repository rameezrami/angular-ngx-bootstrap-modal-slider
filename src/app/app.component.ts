import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommentsSliderComponent } from './comments-slider/comments-slider.component';

@Component({
  selector: 'example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example';
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  launchLeftModal() {
    const initialState = {
      title: 'Slide From Left',
    };
    const options = {
      class: 'modal-slider left',
      initialState,
    };
    this.bsModalRef = this.modalService.show(CommentsSliderComponent, options);
  }
  launchRightModal() {
    const initialState = {
      title: 'Slide From Right',
    };
    const options = {
      class: 'modal-slider right',
      initialState,
    };
    this.bsModalRef = this.modalService.show(CommentsSliderComponent, options);
  }
}
