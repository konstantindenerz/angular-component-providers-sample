import {Context} from '../models/context';
import {Process} from './process';

export class ProcessContext implements Context<Process> {
  state: Process = {
    steps: [
      {title: 'First Step', value: 42},
      {title: 'Second Step', value: 42}
    ]
  };
}
