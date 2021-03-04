import {Component, Inject, INJECTOR, OnInit} from '@angular/core';
import {CONTEXT} from '../models/context';
import {DashboardContext} from './dashboard.context';

/**
 * Smart component, responsible for interaction between different presentational components and data retrieval.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    {provide: CONTEXT, useClass: DashboardContext}
  ]
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(CONTEXT) public context: DashboardContext) { }

  ngOnInit(): void {
  }

  changeValue(): void {
    this.context.state.otherValue++;
  }
}
