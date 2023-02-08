/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlertAppearance, AlertType } from "./components/alert/alert.type";
import { BadgeAppearance, BadgeSize, BadgeType } from "./components/badge/badge.type";
import { ButtonAppearance, ButtonSize, ButtonStyle } from "./components/button/button.type";
import { ContentsListItem } from "./components/contents-list/contents-list.interface";
import { ContextMenuItem } from "./components/context-menu/context-menu.interface";
import { NavMenuItem } from "./components/nav-menu/nav-menu.interface";
import { SpinnerAppearance, SpinnerSize } from "./components/spinner/spinner.type";
import { ToastPosition } from "./components/toast/toast.type";
export namespace Components {
    interface CpyAccordion {
        "close": () => Promise<void>;
        "headerTitle": string;
        "open": () => Promise<void>;
        "opened": boolean;
        "size": 'small' | 'default' | 'large';
        "toggle": () => Promise<void>;
    }
    interface CpyAlert {
        "appearance": AlertAppearance;
        "container": boolean;
        "dismissible": boolean;
        "icon": string;
        "type": AlertType;
    }
    interface CpyAvatar {
        "border": boolean;
        "initials": string;
        "size": 'small' | 'default' | 'large' | 'x-large';
        "src": string;
        "type": 'rounded' | 'square';
    }
    interface CpyBadge {
        "appearance": BadgeAppearance;
        "size": BadgeSize;
        "type": BadgeType;
    }
    interface CpyButton {
        "appearance": ButtonStyle;
        "disabled": boolean;
        "icon": boolean;
        "size": ButtonSize;
        "type": ButtonAppearance;
    }
    interface CpyCodeBlock {
        "code": string;
        "language": 'typescript' | 'javascript' | 'scss' | 'css' | 'html' | 'json' | 'shell';
    }
    interface CpyContentsList {
        "activeIndex": number;
        "headerTitle": string;
        "items": ContentsListItem[];
    }
    interface CpyContentsListItem {
        "active": boolean;
        "item": ContentsListItem;
    }
    interface CpyContextMenu {
        "items": ContextMenuItem[];
    }
    interface CpyContextMenuItem {
        "item": ContextMenuItem;
    }
    interface CpyDialog {
        "close": () => Promise<void>;
        "dialogTitle": string;
        "open": () => Promise<void>;
        "size": 'small' | 'default' | 'large' | 'full-screen';
        "zIndex": string;
    }
    interface CpyDrawer {
        "opened": boolean;
    }
    interface CpyDrawerContainer {
        "opened": boolean;
    }
    interface CpyExpandCollapse {
        "collapse": () => Promise<void>;
        "duration": number;
        "expand": () => Promise<void>;
        "expanded": boolean;
        "toggle": () => Promise<void>;
    }
    interface CpyIcon {
    }
    interface CpyLink {
        "href": string;
        "newTab": boolean;
        "type": 'primary' | 'secondary' | 'basic';
    }
    interface CpyNavMenu {
        "items": NavMenuItem[];
    }
    interface CpyNavMenuItem {
        "item": NavMenuItem;
    }
    interface CpyPageContent {
        "hideContentsList": boolean;
    }
    interface CpyPopup {
        "activeOn": 'hover' | 'click';
        "position": 'bottom-start' | 'top-start' | 'left-start' | 'right-start';
    }
    interface CpySpinner {
        "size": SpinnerSize;
        "type": SpinnerAppearance;
    }
    interface CpyTable {
        "tableData": { [key: string]: string | number | boolean | null | undefined }[];
    }
    interface CpyToast {
        "close": () => Promise<void>;
        "dismissible": boolean;
        "duration": number;
        "icon": string;
        "open": () => Promise<void>;
        "position": ToastPosition;
        "toastTitle": string;
        "type": AlertType;
        "zIndex": string;
    }
    interface CpyToggle {
        "checked": boolean;
        "label": string;
        "size": 'small' | 'default' | 'large';
    }
    interface CpyToolbar {
    }
    interface CpyTooltip {
        "position": 'bottom' | 'left' | 'right' | 'top';
        "text": string;
    }
}
export interface CpyAccordionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyAccordionElement;
}
export interface CpyAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyAlertElement;
}
export interface CpyContentsListItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyContentsListItemElement;
}
export interface CpyDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyDialogElement;
}
export interface CpyDrawerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyDrawerElement;
}
export interface CpyDrawerContainerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyDrawerContainerElement;
}
export interface CpyExpandCollapseCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyExpandCollapseElement;
}
export interface CpyNavMenuItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyNavMenuItemElement;
}
export interface CpyToastCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyToastElement;
}
export interface CpyToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyToggleElement;
}
declare global {
    interface HTMLCpyAccordionElement extends Components.CpyAccordion, HTMLStencilElement {
    }
    var HTMLCpyAccordionElement: {
        prototype: HTMLCpyAccordionElement;
        new (): HTMLCpyAccordionElement;
    };
    interface HTMLCpyAlertElement extends Components.CpyAlert, HTMLStencilElement {
    }
    var HTMLCpyAlertElement: {
        prototype: HTMLCpyAlertElement;
        new (): HTMLCpyAlertElement;
    };
    interface HTMLCpyAvatarElement extends Components.CpyAvatar, HTMLStencilElement {
    }
    var HTMLCpyAvatarElement: {
        prototype: HTMLCpyAvatarElement;
        new (): HTMLCpyAvatarElement;
    };
    interface HTMLCpyBadgeElement extends Components.CpyBadge, HTMLStencilElement {
    }
    var HTMLCpyBadgeElement: {
        prototype: HTMLCpyBadgeElement;
        new (): HTMLCpyBadgeElement;
    };
    interface HTMLCpyButtonElement extends Components.CpyButton, HTMLStencilElement {
    }
    var HTMLCpyButtonElement: {
        prototype: HTMLCpyButtonElement;
        new (): HTMLCpyButtonElement;
    };
    interface HTMLCpyCodeBlockElement extends Components.CpyCodeBlock, HTMLStencilElement {
    }
    var HTMLCpyCodeBlockElement: {
        prototype: HTMLCpyCodeBlockElement;
        new (): HTMLCpyCodeBlockElement;
    };
    interface HTMLCpyContentsListElement extends Components.CpyContentsList, HTMLStencilElement {
    }
    var HTMLCpyContentsListElement: {
        prototype: HTMLCpyContentsListElement;
        new (): HTMLCpyContentsListElement;
    };
    interface HTMLCpyContentsListItemElement extends Components.CpyContentsListItem, HTMLStencilElement {
    }
    var HTMLCpyContentsListItemElement: {
        prototype: HTMLCpyContentsListItemElement;
        new (): HTMLCpyContentsListItemElement;
    };
    interface HTMLCpyContextMenuElement extends Components.CpyContextMenu, HTMLStencilElement {
    }
    var HTMLCpyContextMenuElement: {
        prototype: HTMLCpyContextMenuElement;
        new (): HTMLCpyContextMenuElement;
    };
    interface HTMLCpyContextMenuItemElement extends Components.CpyContextMenuItem, HTMLStencilElement {
    }
    var HTMLCpyContextMenuItemElement: {
        prototype: HTMLCpyContextMenuItemElement;
        new (): HTMLCpyContextMenuItemElement;
    };
    interface HTMLCpyDialogElement extends Components.CpyDialog, HTMLStencilElement {
    }
    var HTMLCpyDialogElement: {
        prototype: HTMLCpyDialogElement;
        new (): HTMLCpyDialogElement;
    };
    interface HTMLCpyDrawerElement extends Components.CpyDrawer, HTMLStencilElement {
    }
    var HTMLCpyDrawerElement: {
        prototype: HTMLCpyDrawerElement;
        new (): HTMLCpyDrawerElement;
    };
    interface HTMLCpyDrawerContainerElement extends Components.CpyDrawerContainer, HTMLStencilElement {
    }
    var HTMLCpyDrawerContainerElement: {
        prototype: HTMLCpyDrawerContainerElement;
        new (): HTMLCpyDrawerContainerElement;
    };
    interface HTMLCpyExpandCollapseElement extends Components.CpyExpandCollapse, HTMLStencilElement {
    }
    var HTMLCpyExpandCollapseElement: {
        prototype: HTMLCpyExpandCollapseElement;
        new (): HTMLCpyExpandCollapseElement;
    };
    interface HTMLCpyIconElement extends Components.CpyIcon, HTMLStencilElement {
    }
    var HTMLCpyIconElement: {
        prototype: HTMLCpyIconElement;
        new (): HTMLCpyIconElement;
    };
    interface HTMLCpyLinkElement extends Components.CpyLink, HTMLStencilElement {
    }
    var HTMLCpyLinkElement: {
        prototype: HTMLCpyLinkElement;
        new (): HTMLCpyLinkElement;
    };
    interface HTMLCpyNavMenuElement extends Components.CpyNavMenu, HTMLStencilElement {
    }
    var HTMLCpyNavMenuElement: {
        prototype: HTMLCpyNavMenuElement;
        new (): HTMLCpyNavMenuElement;
    };
    interface HTMLCpyNavMenuItemElement extends Components.CpyNavMenuItem, HTMLStencilElement {
    }
    var HTMLCpyNavMenuItemElement: {
        prototype: HTMLCpyNavMenuItemElement;
        new (): HTMLCpyNavMenuItemElement;
    };
    interface HTMLCpyPageContentElement extends Components.CpyPageContent, HTMLStencilElement {
    }
    var HTMLCpyPageContentElement: {
        prototype: HTMLCpyPageContentElement;
        new (): HTMLCpyPageContentElement;
    };
    interface HTMLCpyPopupElement extends Components.CpyPopup, HTMLStencilElement {
    }
    var HTMLCpyPopupElement: {
        prototype: HTMLCpyPopupElement;
        new (): HTMLCpyPopupElement;
    };
    interface HTMLCpySpinnerElement extends Components.CpySpinner, HTMLStencilElement {
    }
    var HTMLCpySpinnerElement: {
        prototype: HTMLCpySpinnerElement;
        new (): HTMLCpySpinnerElement;
    };
    interface HTMLCpyTableElement extends Components.CpyTable, HTMLStencilElement {
    }
    var HTMLCpyTableElement: {
        prototype: HTMLCpyTableElement;
        new (): HTMLCpyTableElement;
    };
    interface HTMLCpyToastElement extends Components.CpyToast, HTMLStencilElement {
    }
    var HTMLCpyToastElement: {
        prototype: HTMLCpyToastElement;
        new (): HTMLCpyToastElement;
    };
    interface HTMLCpyToggleElement extends Components.CpyToggle, HTMLStencilElement {
    }
    var HTMLCpyToggleElement: {
        prototype: HTMLCpyToggleElement;
        new (): HTMLCpyToggleElement;
    };
    interface HTMLCpyToolbarElement extends Components.CpyToolbar, HTMLStencilElement {
    }
    var HTMLCpyToolbarElement: {
        prototype: HTMLCpyToolbarElement;
        new (): HTMLCpyToolbarElement;
    };
    interface HTMLCpyTooltipElement extends Components.CpyTooltip, HTMLStencilElement {
    }
    var HTMLCpyTooltipElement: {
        prototype: HTMLCpyTooltipElement;
        new (): HTMLCpyTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "cpy-accordion": HTMLCpyAccordionElement;
        "cpy-alert": HTMLCpyAlertElement;
        "cpy-avatar": HTMLCpyAvatarElement;
        "cpy-badge": HTMLCpyBadgeElement;
        "cpy-button": HTMLCpyButtonElement;
        "cpy-code-block": HTMLCpyCodeBlockElement;
        "cpy-contents-list": HTMLCpyContentsListElement;
        "cpy-contents-list-item": HTMLCpyContentsListItemElement;
        "cpy-context-menu": HTMLCpyContextMenuElement;
        "cpy-context-menu-item": HTMLCpyContextMenuItemElement;
        "cpy-dialog": HTMLCpyDialogElement;
        "cpy-drawer": HTMLCpyDrawerElement;
        "cpy-drawer-container": HTMLCpyDrawerContainerElement;
        "cpy-expand-collapse": HTMLCpyExpandCollapseElement;
        "cpy-icon": HTMLCpyIconElement;
        "cpy-link": HTMLCpyLinkElement;
        "cpy-nav-menu": HTMLCpyNavMenuElement;
        "cpy-nav-menu-item": HTMLCpyNavMenuItemElement;
        "cpy-page-content": HTMLCpyPageContentElement;
        "cpy-popup": HTMLCpyPopupElement;
        "cpy-spinner": HTMLCpySpinnerElement;
        "cpy-table": HTMLCpyTableElement;
        "cpy-toast": HTMLCpyToastElement;
        "cpy-toggle": HTMLCpyToggleElement;
        "cpy-toolbar": HTMLCpyToolbarElement;
        "cpy-tooltip": HTMLCpyTooltipElement;
    }
}
declare namespace LocalJSX {
    interface CpyAccordion {
        "headerTitle"?: string;
        "onAccordionOpened"?: (event: CpyAccordionCustomEvent<void>) => void;
        "opened"?: boolean;
        "size"?: 'small' | 'default' | 'large';
    }
    interface CpyAlert {
        "appearance"?: AlertAppearance;
        "container"?: boolean;
        "dismissible"?: boolean;
        "icon"?: string;
        "onClosed"?: (event: CpyAlertCustomEvent<void>) => void;
        "type"?: AlertType;
    }
    interface CpyAvatar {
        "border"?: boolean;
        "initials"?: string;
        "size"?: 'small' | 'default' | 'large' | 'x-large';
        "src"?: string;
        "type"?: 'rounded' | 'square';
    }
    interface CpyBadge {
        "appearance"?: BadgeAppearance;
        "size"?: BadgeSize;
        "type"?: BadgeType;
    }
    interface CpyButton {
        "appearance"?: ButtonStyle;
        "disabled"?: boolean;
        "icon"?: boolean;
        "size"?: ButtonSize;
        "type"?: ButtonAppearance;
    }
    interface CpyCodeBlock {
        "code"?: string;
        "language"?: 'typescript' | 'javascript' | 'scss' | 'css' | 'html' | 'json' | 'shell';
    }
    interface CpyContentsList {
        "activeIndex"?: number;
        "headerTitle"?: string;
        "items"?: ContentsListItem[];
    }
    interface CpyContentsListItem {
        "active"?: boolean;
        "item"?: ContentsListItem;
        "onClicked"?: (event: CpyContentsListItemCustomEvent<void>) => void;
    }
    interface CpyContextMenu {
        "items"?: ContextMenuItem[];
    }
    interface CpyContextMenuItem {
        "item"?: ContextMenuItem;
    }
    interface CpyDialog {
        "dialogTitle"?: string;
        "onClosed"?: (event: CpyDialogCustomEvent<void>) => void;
        "size"?: 'small' | 'default' | 'large' | 'full-screen';
        "zIndex"?: string;
    }
    interface CpyDrawer {
        "onToggleOpened"?: (event: CpyDrawerCustomEvent<void>) => void;
        "opened"?: boolean;
    }
    interface CpyDrawerContainer {
        "onToggleDrawer"?: (event: CpyDrawerContainerCustomEvent<void>) => void;
        "opened"?: boolean;
    }
    interface CpyExpandCollapse {
        "duration"?: number;
        "expanded"?: boolean;
        "onToggleExpanded"?: (event: CpyExpandCollapseCustomEvent<boolean>) => void;
    }
    interface CpyIcon {
    }
    interface CpyLink {
        "href"?: string;
        "newTab"?: boolean;
        "type"?: 'primary' | 'secondary' | 'basic';
    }
    interface CpyNavMenu {
        "items"?: NavMenuItem[];
    }
    interface CpyNavMenuItem {
        "item"?: NavMenuItem;
        "onItemActive"?: (event: CpyNavMenuItemCustomEvent<void>) => void;
    }
    interface CpyPageContent {
        "hideContentsList"?: boolean;
    }
    interface CpyPopup {
        "activeOn"?: 'hover' | 'click';
        "position"?: 'bottom-start' | 'top-start' | 'left-start' | 'right-start';
    }
    interface CpySpinner {
        "size"?: SpinnerSize;
        "type"?: SpinnerAppearance;
    }
    interface CpyTable {
        "tableData"?: { [key: string]: string | number | boolean | null | undefined }[];
    }
    interface CpyToast {
        "dismissible"?: boolean;
        "duration"?: number;
        "icon"?: string;
        "onClosed"?: (event: CpyToastCustomEvent<void>) => void;
        "onOpened"?: (event: CpyToastCustomEvent<void>) => void;
        "position"?: ToastPosition;
        "toastTitle"?: string;
        "type"?: AlertType;
        "zIndex"?: string;
    }
    interface CpyToggle {
        "checked"?: boolean;
        "label"?: string;
        "onCheckedChange"?: (event: CpyToggleCustomEvent<boolean>) => void;
        "size"?: 'small' | 'default' | 'large';
    }
    interface CpyToolbar {
    }
    interface CpyTooltip {
        "position"?: 'bottom' | 'left' | 'right' | 'top';
        "text"?: string;
    }
    interface IntrinsicElements {
        "cpy-accordion": CpyAccordion;
        "cpy-alert": CpyAlert;
        "cpy-avatar": CpyAvatar;
        "cpy-badge": CpyBadge;
        "cpy-button": CpyButton;
        "cpy-code-block": CpyCodeBlock;
        "cpy-contents-list": CpyContentsList;
        "cpy-contents-list-item": CpyContentsListItem;
        "cpy-context-menu": CpyContextMenu;
        "cpy-context-menu-item": CpyContextMenuItem;
        "cpy-dialog": CpyDialog;
        "cpy-drawer": CpyDrawer;
        "cpy-drawer-container": CpyDrawerContainer;
        "cpy-expand-collapse": CpyExpandCollapse;
        "cpy-icon": CpyIcon;
        "cpy-link": CpyLink;
        "cpy-nav-menu": CpyNavMenu;
        "cpy-nav-menu-item": CpyNavMenuItem;
        "cpy-page-content": CpyPageContent;
        "cpy-popup": CpyPopup;
        "cpy-spinner": CpySpinner;
        "cpy-table": CpyTable;
        "cpy-toast": CpyToast;
        "cpy-toggle": CpyToggle;
        "cpy-toolbar": CpyToolbar;
        "cpy-tooltip": CpyTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cpy-accordion": LocalJSX.CpyAccordion & JSXBase.HTMLAttributes<HTMLCpyAccordionElement>;
            "cpy-alert": LocalJSX.CpyAlert & JSXBase.HTMLAttributes<HTMLCpyAlertElement>;
            "cpy-avatar": LocalJSX.CpyAvatar & JSXBase.HTMLAttributes<HTMLCpyAvatarElement>;
            "cpy-badge": LocalJSX.CpyBadge & JSXBase.HTMLAttributes<HTMLCpyBadgeElement>;
            "cpy-button": LocalJSX.CpyButton & JSXBase.HTMLAttributes<HTMLCpyButtonElement>;
            "cpy-code-block": LocalJSX.CpyCodeBlock & JSXBase.HTMLAttributes<HTMLCpyCodeBlockElement>;
            "cpy-contents-list": LocalJSX.CpyContentsList & JSXBase.HTMLAttributes<HTMLCpyContentsListElement>;
            "cpy-contents-list-item": LocalJSX.CpyContentsListItem & JSXBase.HTMLAttributes<HTMLCpyContentsListItemElement>;
            "cpy-context-menu": LocalJSX.CpyContextMenu & JSXBase.HTMLAttributes<HTMLCpyContextMenuElement>;
            "cpy-context-menu-item": LocalJSX.CpyContextMenuItem & JSXBase.HTMLAttributes<HTMLCpyContextMenuItemElement>;
            "cpy-dialog": LocalJSX.CpyDialog & JSXBase.HTMLAttributes<HTMLCpyDialogElement>;
            "cpy-drawer": LocalJSX.CpyDrawer & JSXBase.HTMLAttributes<HTMLCpyDrawerElement>;
            "cpy-drawer-container": LocalJSX.CpyDrawerContainer & JSXBase.HTMLAttributes<HTMLCpyDrawerContainerElement>;
            "cpy-expand-collapse": LocalJSX.CpyExpandCollapse & JSXBase.HTMLAttributes<HTMLCpyExpandCollapseElement>;
            "cpy-icon": LocalJSX.CpyIcon & JSXBase.HTMLAttributes<HTMLCpyIconElement>;
            "cpy-link": LocalJSX.CpyLink & JSXBase.HTMLAttributes<HTMLCpyLinkElement>;
            "cpy-nav-menu": LocalJSX.CpyNavMenu & JSXBase.HTMLAttributes<HTMLCpyNavMenuElement>;
            "cpy-nav-menu-item": LocalJSX.CpyNavMenuItem & JSXBase.HTMLAttributes<HTMLCpyNavMenuItemElement>;
            "cpy-page-content": LocalJSX.CpyPageContent & JSXBase.HTMLAttributes<HTMLCpyPageContentElement>;
            "cpy-popup": LocalJSX.CpyPopup & JSXBase.HTMLAttributes<HTMLCpyPopupElement>;
            "cpy-spinner": LocalJSX.CpySpinner & JSXBase.HTMLAttributes<HTMLCpySpinnerElement>;
            "cpy-table": LocalJSX.CpyTable & JSXBase.HTMLAttributes<HTMLCpyTableElement>;
            "cpy-toast": LocalJSX.CpyToast & JSXBase.HTMLAttributes<HTMLCpyToastElement>;
            "cpy-toggle": LocalJSX.CpyToggle & JSXBase.HTMLAttributes<HTMLCpyToggleElement>;
            "cpy-toolbar": LocalJSX.CpyToolbar & JSXBase.HTMLAttributes<HTMLCpyToolbarElement>;
            "cpy-tooltip": LocalJSX.CpyTooltip & JSXBase.HTMLAttributes<HTMLCpyTooltipElement>;
        }
    }
}
