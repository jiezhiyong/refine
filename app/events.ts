import { EventEmitter } from 'events';

export const EVENTS = {
  ISSUE_CHANGED: 'ISSUE_CHANGED',
};

/**
 * 事件发射器
 */
export const emitter = new EventEmitter();
