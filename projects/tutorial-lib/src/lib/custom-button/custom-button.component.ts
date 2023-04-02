import {Component, OnInit} from '@angular/core';
import {ButtonConfigurationService} from "./button-configuration.service";

@Component({
  selector: 'lib-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  buttonName = "Send"
  constructor(private buttonConfigurationService: ButtonConfigurationService) {}

  ngOnInit(): void {
    this.buttonName = this.buttonConfigurationService.getTranslations().buttonName
  }
}
