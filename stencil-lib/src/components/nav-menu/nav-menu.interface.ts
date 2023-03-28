export type NavMenuItemType = 'basic' | 'group' | 'collapsible';

export interface NavMenuItem {

  icon?: string;
  separator?: boolean;
  title: string;
  description?: string;
  type: NavMenuItemType;
  url: string;
  active?: boolean;
  collapsed?: boolean;
  looseMatch?: boolean;
  openInNewTab?: boolean;
  function?: (item: NavMenuItem) => any;
  children?: NavMenuItem[];

}
