import {Injectable} from "@angular/core";

export interface ButtonConfiguration {
  buttonName: string;
}
@Injectable({
  providedIn: 'root'
})
export abstract class ButtonConfigurationService {
  abstract getTranslations(): ButtonConfiguration;
}
