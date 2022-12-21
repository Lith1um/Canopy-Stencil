/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'canopy-stencil';




export declare interface CpyAlert extends Components.CpyAlert {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alertTitle', 'appearance', 'container', 'type']
})
@Component({
  selector: 'cpy-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alertTitle', 'appearance', 'container', 'type']
})
export class CpyAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
