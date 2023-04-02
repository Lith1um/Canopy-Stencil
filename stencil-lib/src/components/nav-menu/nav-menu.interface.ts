export type NavMenuItemType = 'basic' | 'group' | 'collapsible';

export interface NavMenuItem {

  title: string;
  type: NavMenuItemType;
  icon?: string;
  separator?: boolean;
  description?: string;
  url?: string;
  active?: boolean;
  collapsed?: boolean;
  looseMatch?: boolean;
  openInNewTab?: boolean;
  function?: (item: NavMenuItem) => any;
  children?: NavMenuItem[];

}
