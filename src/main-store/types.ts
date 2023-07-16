
export type SupabaseResponse<T> = {
  count: null;
  data: T;
  status: number;
  statusText: string
}