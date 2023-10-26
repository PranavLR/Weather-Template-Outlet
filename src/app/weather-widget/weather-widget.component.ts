import { Component, Injector, Input, TemplateRef, inject } from '@angular/core';
import { WidgetActions } from '../services/widget-actions.service';
import { WidgetState } from '../services/widget-state.service';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent {
  @Input()
  headerTemplate!: TemplateRef<any>;

  @Input()
  actionTemplate!: TemplateRef<any>;

  @Input()
  contentTemplate!: TemplateRef<{ $implicit: WidgetState }>;

  state = inject(WidgetState);
  actions = inject(WidgetActions);
  injector = inject(Injector);
}
