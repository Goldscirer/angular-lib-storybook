import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() label: string = 'Send';
}
