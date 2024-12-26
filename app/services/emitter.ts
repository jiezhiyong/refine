import { EventEmitter } from 'events';
import { singleton } from '~/utils/singleton';

export const EVENTS = {
  ISSUE_CHANGED: 'ISSUE_CHANGED',
};

export const emitter = singleton('emitter', () => new EventEmitter());
