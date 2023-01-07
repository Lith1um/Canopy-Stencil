export interface RecursiveMenuItem {

  icon?: string;
  separator?: boolean;
  title: string;
  description?: string;
  url: string;
  openInNewTab?: boolean;
  function?: any;
  children?: RecursiveMenuItem[];

}
