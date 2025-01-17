import type { MetaSession } from '@grafana/faro-core';

export interface FaroUserSession {
  sessionId: string;
  lastActivity: number;
  started: number;
  sessionMeta?: MetaSession;
}
