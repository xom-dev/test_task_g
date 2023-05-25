export interface UserData {
  userInfo: UserInfo;
  progressBoard: ProgressBoard;
  detailedInfo: DetailedInfoItem[];
  additions: AdditionalItem[];
}

export interface UserInfo {
  name: string;
  role: string;
  isActive: boolean;
  photo: string;
}

export interface ProgressBoard {
  name: string;
  percentage: number;
}

export interface DetailedInfoItem {
  done: number;
  all: number;
  title: string;
  level: number;
}

export interface AdditionalItem {
  title: string;
  books: number;
  users: number;
}
