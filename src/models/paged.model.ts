export class PagedParams {
  page = 0;
  size = 10;
  totalElements?: number;
  sort?: {
    key: string;
    value: TableSortOrder;
  }[];
}

export type TableSortOrder = 'ascend' | 'descend';

export interface PagedResponse<T> {
  currentPage: number;
  pageSize: number;
  results: T[];
  totalElements: number;
}
