type StatusName = "idle" | "pending" | "fulfilled" | "rejected";
type StatusAction = string;

export type StateRequestStatus = {
  status: StatusName;
  statusCode: number;
  message: string;
  timestamp: number;
};

export interface PendingData {
  actionName: StatusAction;
}
export interface RejectedData extends PendingData {
  error?: unknown;
  message?: string;
}
export interface FulfilledData extends PendingData {
  status?: number;
  message?: string;
}
export interface ResetData {
  actionName?: StatusAction | StatusAction[];
}
