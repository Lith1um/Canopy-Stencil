/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@canopy-web/core';


@ProxyCmp({
  inputs: ['headerTitle', 'opened', 'size'],
  methods: ['open', 'close', 'toggle']
})
@Component({
  selector: 'cpy-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['headerTitle', 'opened', 'size'],
})
export class CpyAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['accordionOpened']);
  }
}


export declare interface CpyAccordion extends Components.CpyAccordion {

  accordionOpened: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['appearance', 'container', 'dismissible', 'icon', 'type']
})
@Component({
  selector: 'cpy-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'container', 'dismissible', 'icon', 'type'],
})
export class CpyAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closed']);
  }
}


export declare interface CpyAlert extends Components.CpyAlert {

  closed: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['border', 'initials', 'loading', 'size', 'src', 'type']
})
@Component({
  selector: 'cpy-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['border', 'initials', 'loading', 'size', 'src', 'type'],
})
export class CpyAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyAvatar extends Components.CpyAvatar {}


@ProxyCmp({
  inputs: ['appearance', 'block', 'size', 'type']
})
@Component({
  selector: 'cpy-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'block', 'size', 'type'],
})
export class CpyBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyBadge extends Components.CpyBadge {}


@ProxyCmp({
  inputs: ['appearance', 'disabled', 'icon', 'size', 'type']
})
@Component({
  selector: 'cpy-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'disabled', 'icon', 'size', 'type'],
})
export class CpyButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClicked']);
  }
}


export declare interface CpyButton extends Components.CpyButton {

  buttonClicked: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
})
@Component({
  selector: 'cpy-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class CpyCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyCard extends Components.CpyCard {}


@ProxyCmp({
  inputs: ['carouselTitle']
})
@Component({
  selector: 'cpy-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['carouselTitle'],
})
export class CpyCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyCarousel extends Components.CpyCarousel {}


@ProxyCmp({
  inputs: ['code', 'language']
})
@Component({
  selector: 'cpy-code-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['code', 'language'],
})
export class CpyCodeBlock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyCodeBlock extends Components.CpyCodeBlock {}


@ProxyCmp({
  inputs: ['code', 'header', 'language', 'showCode']
})
@Component({
  selector: 'cpy-code-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['code', 'header', 'language', 'showCode'],
})
export class CpyCodeExample {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyCodeExample extends Components.CpyCodeExample {}


@ProxyCmp({
  inputs: ['code', 'quotes']
})
@Component({
  selector: 'cpy-code-snippet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['code', 'quotes'],
})
export class CpyCodeSnippet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyCodeSnippet extends Components.CpyCodeSnippet {}


@ProxyCmp({
  inputs: ['comment', 'hideAvatar', 'maxLines', 'rightAligned', 'showLessText', 'showMoreText', 'size', 'type']
})
@Component({
  selector: 'cpy-comment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['comment', 'hideAvatar', 'maxLines', 'rightAligned', 'showLessText', 'showMoreText', 'size', 'type'],
})
export class CpyComment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyComment extends Components.CpyComment {}


@ProxyCmp({
  inputs: ['comments', 'hideAvatar', 'maxLines', 'rightAligned', 'showLessText', 'showMoreText', 'size', 'type']
})
@Component({
  selector: 'cpy-comment-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['comments', 'hideAvatar', 'maxLines', 'rightAligned', 'showLessText', 'showMoreText', 'size', 'type'],
})
export class CpyCommentList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyCommentList extends Components.CpyCommentList {}


@ProxyCmp({
  inputs: ['activeIndex', 'headerTitle', 'items']
})
@Component({
  selector: 'cpy-contents-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeIndex', 'headerTitle', 'items'],
})
export class CpyContentsList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyContentsList extends Components.CpyContentsList {}


@ProxyCmp({
  inputs: ['active', 'item']
})
@Component({
  selector: 'cpy-contents-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'item'],
})
export class CpyContentsListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clicked']);
  }
}


export declare interface CpyContentsListItem extends Components.CpyContentsListItem {

  clicked: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['items'],
  methods: ['recalculatePosition']
})
@Component({
  selector: 'cpy-context-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['items'],
})
export class CpyContextMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyContextMenu extends Components.CpyContextMenu {}


@ProxyCmp({
  inputs: ['item'],
  methods: ['recalculatePosition']
})
@Component({
  selector: 'cpy-context-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['item'],
})
export class CpyContextMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyContextMenuItem extends Components.CpyContextMenuItem {}


@ProxyCmp({
  inputs: ['items']
})
@Component({
  selector: 'cpy-context-menu-trigger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['items'],
})
export class CpyContextMenuTrigger {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyContextMenuTrigger extends Components.CpyContextMenuTrigger {}


@ProxyCmp({
  inputs: ['dialogTitle', 'size', 'zIndex'],
  methods: ['open', 'close']
})
@Component({
  selector: 'cpy-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dialogTitle', 'size', 'zIndex'],
})
export class CpyDialog {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closed']);
  }
}


export declare interface CpyDialog extends Components.CpyDialog {

  closed: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['mode', 'opened']
})
@Component({
  selector: 'cpy-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode', 'opened'],
})
export class CpyDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleOpened']);
  }
}


export declare interface CpyDrawer extends Components.CpyDrawer {

  toggleOpened: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['mode', 'opened'],
  methods: ['toggle']
})
@Component({
  selector: 'cpy-drawer-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode', 'opened'],
})
export class CpyDrawerContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleDrawer']);
  }
}


export declare interface CpyDrawerContainer extends Components.CpyDrawerContainer {

  toggleDrawer: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['duration', 'expanded'],
  methods: ['expand', 'collapse', 'toggle']
})
@Component({
  selector: 'cpy-expand-collapse',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['duration', 'expanded'],
})
export class CpyExpandCollapse {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleExpanded']);
  }
}


export declare interface CpyExpandCollapse extends Components.CpyExpandCollapse {

  toggleExpanded: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['disabled', 'size'],
  methods: ['markAsTouched', 'markAsUntouched', 'isValid']
})
@Component({
  selector: 'cpy-form-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'size'],
})
export class CpyFormGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyFormGroup extends Components.CpyFormGroup {}


@ProxyCmp({
})
@Component({
  selector: 'cpy-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class CpyIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyIcon extends Components.CpyIcon {}


@ProxyCmp({
  inputs: ['disabled', 'label', 'placeholder', 'required', 'size', 'type', 'validators', 'value'],
  methods: ['isValid', 'markAsTouched', 'markAsUntouched']
})
@Component({
  selector: 'cpy-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'placeholder', 'required', 'size', 'type', 'validators', 'value'],
})
export class CpyInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CpyInput extends Components.CpyInput {

  valueChange: EventEmitter<CustomEvent<string | number>>;
}


@ProxyCmp({
  inputs: ['disabled', 'error', 'interacted', 'label', 'noContainer', 'popup', 'required', 'size'],
  methods: ['closePopup']
})
@Component({
  selector: 'cpy-input-base',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'interacted', 'label', 'noContainer', 'popup', 'required', 'size'],
})
export class CpyInputBase {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popupClosed', 'labelClicked']);
  }
}


export declare interface CpyInputBase extends Components.CpyInputBase {

  popupClosed: EventEmitter<CustomEvent<void>>;

  labelClicked: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'required', 'size', 'validators', 'value'],
  methods: ['isValid', 'markAsTouched', 'markAsUntouched']
})
@Component({
  selector: 'cpy-input-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'required', 'size', 'validators', 'value'],
})
export class CpyInputCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CpyInputCheckbox extends Components.CpyInputCheckbox {

  valueChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['accept', 'disabled', 'label', 'multiple', 'placeholder', 'required', 'size', 'validators', 'value'],
  methods: ['isValid', 'markAsTouched', 'markAsUntouched']
})
@Component({
  selector: 'cpy-input-color',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'disabled', 'label', 'multiple', 'placeholder', 'required', 'size', 'validators', 'value'],
})
export class CpyInputColor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CpyInputColor extends Components.CpyInputColor {

  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['accept', 'disabled', 'label', 'multiple', 'placeholder', 'required', 'size', 'validators', 'value'],
  methods: ['isValid', 'markAsTouched', 'markAsUntouched']
})
@Component({
  selector: 'cpy-input-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'disabled', 'label', 'multiple', 'placeholder', 'required', 'size', 'validators', 'value'],
})
export class CpyInputFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CpyInputFile extends Components.CpyInputFile {

  valueChange: EventEmitter<CustomEvent<File[]>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'required', 'size', 'validators', 'value'],
  methods: ['isValid', 'markAsTouched', 'markAsUntouched']
})
@Component({
  selector: 'cpy-input-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'required', 'size', 'validators', 'value'],
})
export class CpyInputSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CpyInputSelect extends Components.CpyInputSelect {

  valueChange: EventEmitter<CustomEvent<string | number>>;
}


@ProxyCmp({
  inputs: ['active', 'label', 'size', 'value']
})
@Component({
  selector: 'cpy-input-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'label', 'size', 'value'],
})
export class CpyInputSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['optionSelected']);
  }
}


export declare interface CpyInputSelectOption extends Components.CpyInputSelectOption {

  optionSelected: EventEmitter<CustomEvent<string | number>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'maxRows', 'minRows', 'placeholder', 'required', 'size', 'validators', 'value'],
  methods: ['isValid', 'markAsTouched', 'markAsUntouched']
})
@Component({
  selector: 'cpy-input-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'maxRows', 'minRows', 'placeholder', 'required', 'size', 'validators', 'value'],
})
export class CpyInputTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CpyInputTextarea extends Components.CpyInputTextarea {

  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'required', 'size', 'switchAfter', 'validators', 'value'],
  methods: ['isValid', 'markAsTouched', 'markAsUntouched']
})
@Component({
  selector: 'cpy-input-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'required', 'size', 'switchAfter', 'validators', 'value'],
})
export class CpyInputToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CpyInputToggle extends Components.CpyInputToggle {

  valueChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['href', 'newTab', 'type', 'underline']
})
@Component({
  selector: 'cpy-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'newTab', 'type', 'underline'],
})
export class CpyLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['linkClicked']);
  }
}


export declare interface CpyLink extends Components.CpyLink {

  linkClicked: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['items']
})
@Component({
  selector: 'cpy-nav-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['items'],
})
export class CpyNavMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyNavMenu extends Components.CpyNavMenu {}


@ProxyCmp({
  inputs: ['item']
})
@Component({
  selector: 'cpy-nav-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['item'],
})
export class CpyNavMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemActive']);
  }
}


export declare interface CpyNavMenuItem extends Components.CpyNavMenuItem {

  itemActive: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['hasBackdropClick', 'show', 'zIndex'],
  methods: ['open', 'close', 'toggle']
})
@Component({
  selector: 'cpy-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasBackdropClick', 'show', 'zIndex'],
})
export class CpyOverlay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closed', 'backdropClick']);
  }
}


export declare interface CpyOverlay extends Components.CpyOverlay {

  closed: EventEmitter<CustomEvent<void>>;

  backdropClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
})
@Component({
  selector: 'cpy-page-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class CpyPageContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyPageContainer extends Components.CpyPageContainer {}


@ProxyCmp({
  inputs: ['contentsTitle', 'hideContentsList']
})
@Component({
  selector: 'cpy-page-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contentsTitle', 'hideContentsList'],
})
export class CpyPageContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyPageContent extends Components.CpyPageContent {}


@ProxyCmp({
  inputs: ['activeOn', 'disabled', 'position', 'stretch'],
  methods: ['show', 'hide', 'recalculatePosition']
})
@Component({
  selector: 'cpy-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeOn', 'disabled', 'position', 'stretch'],
})
export class CpyPopup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['opened', 'closed']);
  }
}


export declare interface CpyPopup extends Components.CpyPopup {

  opened: EventEmitter<CustomEvent<void>>;

  closed: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['border', 'indeterminate', 'size', 'type', 'value']
})
@Component({
  selector: 'cpy-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['border', 'indeterminate', 'size', 'type', 'value'],
})
export class CpyProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyProgressBar extends Components.CpyProgressBar {}


@ProxyCmp({
  inputs: ['lines', 'showLessText', 'showMoreText', 'text', 'type']
})
@Component({
  selector: 'cpy-show-more',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['lines', 'showLessText', 'showMoreText', 'text', 'type'],
})
export class CpyShowMore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyShowMore extends Components.CpyShowMore {}


@ProxyCmp({
  inputs: ['delay', 'position', 'reset']
})
@Component({
  selector: 'cpy-slide-in',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['delay', 'position', 'reset'],
})
export class CpySlideIn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpySlideIn extends Components.CpySlideIn {}


@ProxyCmp({
  inputs: ['size', 'type']
})
@Component({
  selector: 'cpy-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'type'],
})
export class CpySpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpySpinner extends Components.CpySpinner {}


@ProxyCmp({
  inputs: ['centered', 'disabled', 'unbounded']
})
@Component({
  selector: 'cpy-splash',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['centered', 'disabled', 'unbounded'],
})
export class CpySplash {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpySplash extends Components.CpySplash {}


@ProxyCmp({
  inputs: ['direction', 'overlap']
})
@Component({
  selector: 'cpy-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'overlap'],
})
export class CpyStack {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyStack extends Components.CpyStack {}


@ProxyCmp({
  methods: ['unselect', 'select']
})
@Component({
  selector: 'cpy-tab-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class CpyTabContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyTabContent extends Components.CpyTabContent {}


@ProxyCmp({
  inputs: ['headerId', 'tabTitle']
})
@Component({
  selector: 'cpy-tab-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['headerId', 'tabTitle'],
})
export class CpyTabHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selected']);
  }
}


export declare interface CpyTabHeader extends Components.CpyTabHeader {

  selected: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['tableData']
})
@Component({
  selector: 'cpy-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['tableData'],
})
export class CpyTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyTable extends Components.CpyTable {}


@ProxyCmp({
  inputs: ['activeIndex', 'position']
})
@Component({
  selector: 'cpy-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeIndex', 'position'],
})
export class CpyTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabChanged']);
  }
}


export declare interface CpyTabs extends Components.CpyTabs {

  tabChanged: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['dismissible', 'duration', 'icon', 'position', 'toastTitle', 'type', 'zIndex'],
  methods: ['close', 'open']
})
@Component({
  selector: 'cpy-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dismissible', 'duration', 'icon', 'position', 'toastTitle', 'type', 'zIndex'],
})
export class CpyToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closed', 'opened']);
  }
}


export declare interface CpyToast extends Components.CpyToast {

  closed: EventEmitter<CustomEvent<void>>;

  opened: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['size', 'type']
})
@Component({
  selector: 'cpy-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'type'],
})
export class CpyToolbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyToolbar extends Components.CpyToolbar {}


@ProxyCmp({
  inputs: ['hideArrow', 'position', 'text']
})
@Component({
  selector: 'cpy-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hideArrow', 'position', 'text'],
})
export class CpyTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CpyTooltip extends Components.CpyTooltip {}


