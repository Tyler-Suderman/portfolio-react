export interface LinkItem {
  displayName: string;
  href: string;
  displayText: string;
  id?: string;
}

export interface ImageList {
  [key: string]: string;
}

export interface LinksByKey {
  [key: string]: LinkItem;
}
