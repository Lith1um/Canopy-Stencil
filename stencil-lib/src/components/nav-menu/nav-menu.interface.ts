export type NavMenuItemType = 'basic' | 'group';

export interface NavMenuItem {

  icon?: string;
  separator?: boolean;
  title: string;
  description?: string;
  type: NavMenuItemType;
  url: string;
  looseMatch?: boolean;
  openInNewTab?: boolean;
  function?: any;
  children?: NavMenuItem[];

}
