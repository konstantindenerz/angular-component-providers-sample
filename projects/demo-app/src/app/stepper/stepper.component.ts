import {Component, Input, OnInit} from '@angular/core';
import {ProcessStep} from '../process/process';

/**
 * A stepper is a presentational component to convey progress through numbered steps.
 */
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() steps: ProcessStep[] = [];

  updateValue(step: ProcessStep): void {
    step.value++;
  }
}
