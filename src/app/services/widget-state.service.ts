import { Injectable } from '@angular/core';
import { WeatherData } from '../types/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WidgetState {

  data: WeatherData = {
    temperature: 20,
    windspeed: 5,
    skyCondition: 'sunny'
  }

  lastUpdateAt = new Date();
  
}
