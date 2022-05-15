export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

// enumeration type: 특정 타입 외에는 올 수 없게 하는 타입
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
