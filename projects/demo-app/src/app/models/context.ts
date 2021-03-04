import {InjectionToken} from '@angular/core';

export const CONTEXT = new InjectionToken<Context<any>>('to retrieve context');

/**
 * Common interface with state.
 */
export interface Context<T> {
  state: T;
  // more properties
}
