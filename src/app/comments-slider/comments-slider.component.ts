import { Component, HostBinding } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'example-comments-slider',
  templateUrl: './comments-slider.component.html',
  styleUrls: ['./comments-slider.component.scss'],
})
export class CommentsSliderComponent {
  title = '';
  constructor(public bsModalRef: BsModalRef) {}
  @HostBinding('class') cls = 'comments-container';

  closeModal() {
    this.bsModalRef?.hide();
  }
}
