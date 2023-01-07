/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'canopy-stencil-web';




export declare interface CpyAlert extends Components.CpyAlert {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appearance', 'container', 'icon', 'type']
})
@Component({
  selector: 'cpy-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'container', 'icon', 'type']
})
export class CpyAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyAvatar extends Components.CpyAvatar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['border', 'size', 'src', 'type']
})
@Component({
  selector: 'cpy-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['border', 'size', 'src', 'type']
})
export class CpyAvatar {
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
  inputs: ['mode', 'opened']
})
@Component({
  selector: 'cpy-drawer-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['mode', 'opened']
})
export class CpyDrawerContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleDrawer']);
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


export declare interface CpyMenu extends Components.CpyMenu {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activeOn', 'position']
})
@Component({
  selector: 'cpy-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeOn', 'position']
})
export class CpyMenu {
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


export declare interface CpyNavMenuItem extends Components.CpyNavMenuItem {}

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
  }
}


export declare interface CpyPageContent extends Components.CpyPageContent {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'cpy-page-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CpyPageContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyRecursiveMenu extends Components.CpyRecursiveMenu {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['items']
})
@Component({
  selector: 'cpy-recursive-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['items']
})
export class CpyRecursiveMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyRecursiveMenuItem extends Components.CpyRecursiveMenuItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['item']
})
@Component({
  selector: 'cpy-recursive-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['item']
})
export class CpyRecursiveMenuItem {
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
