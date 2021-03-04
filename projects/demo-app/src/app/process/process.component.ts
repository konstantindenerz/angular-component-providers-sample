import {Component, Inject, OnInit} from '@angular/core';
import {ProcessContext} from './process.context';
import {CONTEXT} from '../models/context';

/**
 * Smart component, responsible for interaction between different presentational components and data retrieval.
 */
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
  providers: [
    {provide: CONTEXT, useClass: ProcessContext}
  ]
})
export class ProcessComponent {

  constructor(@Inject(CONTEXT) public context: ProcessContext) { }
}
