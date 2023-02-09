/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'canopy-stencil-web';




export declare interface CpyAccordion extends Components.CpyAccordion {
  /**
   *  
   */
  accordionOpened: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['headerTitle', 'opened', 'size'],
  methods: ['open', 'close', 'toggle']
})
@Component({
  selector: 'cpy-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['headerTitle', 'opened', 'size']
})
export class CpyAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['accordionOpened']);
  }
}


export declare interface CpyAlert extends Components.CpyAlert {
  /**
   *  
   */
  closed: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appearance', 'container', 'dismissible', 'icon', 'type']
})
@Component({
  selector: 'cpy-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'container', 'dismissible', 'icon', 'type']
})
export class CpyAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closed']);
  }
}


export declare interface CpyAvatar extends Components.CpyAvatar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['border', 'initials', 'size', 'src', 'type']
})
@Component({
  selector: 'cpy-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['border', 'initials', 'size', 'src', 'type']
})
export class CpyAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyBadge extends Components.CpyBadge {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appearance', 'size', 'type']
})
@Component({
  selector: 'cpy-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'size', 'type']
})
export class CpyBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyButton extends Components.CpyButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appearance', 'disabled', 'icon', 'size', 'type']
})
@Component({
  selector: 'cpy-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'disabled', 'icon', 'size', 'type']
})
export class CpyButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyCarousel extends Components.CpyCarousel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['carouselTitle']
})
@Component({
  selector: 'cpy-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['carouselTitle']
})
export class CpyCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyCodeBlock extends Components.CpyCodeBlock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['code', 'language', 'showDetails']
})
@Component({
  selector: 'cpy-code-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['code', 'language', 'showDetails']
})
export class CpyCodeBlock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyContentsList extends Components.CpyContentsList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activeIndex', 'headerTitle', 'items']
})
@Component({
  selector: 'cpy-contents-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeIndex', 'headerTitle', 'items']
})
export class CpyContentsList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyContentsListItem extends Components.CpyContentsListItem {
  /**
   *  
   */
  clicked: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['active', 'item']
})
@Component({
  selector: 'cpy-contents-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'item']
})
export class CpyContentsListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clicked']);
  }
}


export declare interface CpyContextMenu extends Components.CpyContextMenu {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['items']
})
@Component({
  selector: 'cpy-context-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['items']
})
export class CpyContextMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyContextMenuItem extends Components.CpyContextMenuItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['item']
})
@Component({
  selector: 'cpy-context-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['item']
})
export class CpyContextMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyDialog extends Components.CpyDialog {
  /**
   *  
   */
  closed: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['dialogTitle', 'size', 'zIndex'],
  methods: ['open', 'close']
})
@Component({
  selector: 'cpy-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dialogTitle', 'size', 'zIndex']
})
export class CpyDialog {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closed']);
  }
}


export declare interface CpyDrawer extends Components.CpyDrawer {
  /**
   *  
   */
  toggleOpened: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['opened']
})
@Component({
  selector: 'cpy-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['opened']
})
export class CpyDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleOpened']);
  }
}


export declare interface CpyDrawerContainer extends Components.CpyDrawerContainer {
  /**
   *  
   */
  toggleDrawer: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['opened']
})
@Component({
  selector: 'cpy-drawer-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['opened']
})
export class CpyDrawerContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleDrawer']);
  }
}


export declare interface CpyExpandCollapse extends Components.CpyExpandCollapse {
  /**
   *  
   */
  toggleExpanded: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['duration', 'expanded'],
  methods: ['expand', 'collapse', 'toggle']
})
@Component({
  selector: 'cpy-expand-collapse',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['duration', 'expanded']
})
export class CpyExpandCollapse {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleExpanded']);
  }
}


export declare interface CpyIcon extends Components.CpyIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'cpy-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CpyIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyLink extends Components.CpyLink {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['href', 'newTab', 'type']
})
@Component({
  selector: 'cpy-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['href', 'newTab', 'type']
})
export class CpyLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyNavMenu extends Components.CpyNavMenu {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['items']
})
@Component({
  selector: 'cpy-nav-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['items']
})
export class CpyNavMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyNavMenuItem extends Components.CpyNavMenuItem {
  /**
   *  
   */
  itemActive: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['item']
})
@Component({
  selector: 'cpy-nav-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['item']
})
export class CpyNavMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemActive']);
  }
}


export declare interface CpyPageContent extends Components.CpyPageContent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hideContentsList']
})
@Component({
  selector: 'cpy-page-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hideContentsList']
})
export class CpyPageContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyPopup extends Components.CpyPopup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activeOn', 'position']
})
@Component({
  selector: 'cpy-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeOn', 'position']
})
export class CpyPopup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpySpinner extends Components.CpySpinner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size', 'type']
})
@Component({
  selector: 'cpy-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size', 'type']
})
export class CpySpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyTable extends Components.CpyTable {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['tableData']
})
@Component({
  selector: 'cpy-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['tableData']
})
export class CpyTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyToast extends Components.CpyToast {
  /**
   *  
   */
  closed: EventEmitter<CustomEvent<void>>;
  /**
   *  
   */
  opened: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['dismissible', 'duration', 'icon', 'position', 'toastTitle', 'type', 'zIndex'],
  methods: ['close', 'open']
})
@Component({
  selector: 'cpy-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dismissible', 'duration', 'icon', 'position', 'toastTitle', 'type', 'zIndex']
})
export class CpyToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closed', 'opened']);
  }
}


export declare interface CpyToggle extends Components.CpyToggle {
  /**
   *  
   */
  checkedChange: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'label', 'size']
})
@Component({
  selector: 'cpy-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'label', 'size']
})
export class CpyToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface CpyToolbar extends Components.CpyToolbar {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'cpy-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CpyToolbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyTooltip extends Components.CpyTooltip {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['position', 'text']
})
@Component({
  selector: 'cpy-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['position', 'text']
})
export class CpyTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
