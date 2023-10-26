import { Component, inject } from '@angular/core';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-weather-custom-action',
  templateUrl: './weather-custom-action.component.html',
  styleUrls: ['./weather-custom-action.component.scss']
})
export class WeatherCustomActionComponent {
  weatherWidget = inject(WeatherWidgetComponent);

  onClick() {
    this.weatherWidget.actions.reload();
    this.weatherWidget.actions.copyData();
  }
}
