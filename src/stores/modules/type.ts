export interface UserMenu {
  id: number;
  name: string;
  type: number;
  url: string;
  icon: string;
  sort: number;
  children: UserMenuChildren[];
}

export interface UserMenuChildren {
  id: number;
  url: string;
  name: string;
  icon: string;
  sort: number | null;
  type: number;
  parentId: number;
  permission: string;
}
