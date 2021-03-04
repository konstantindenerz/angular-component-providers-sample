import {Context} from '../models/context';
import {Dashboard} from './dashboard';

export class DashboardContext implements Context<Dashboard> {
  state: Dashboard = {title: 'My Dashboard', otherValue: 42};
}
