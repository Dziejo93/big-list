export const STATUSES = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

export type Statuses = typeof STATUSES[keyof typeof STATUSES];
