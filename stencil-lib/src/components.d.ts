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
import { ContextMenuItem } from "./components/context-menu/context-menu.interface";
import { NavMenuItem } from "./components/nav-menu/nav-menu.interface";
import { SpinnerAppearance, SpinnerSize } from "./components/spinner/spinner.type";
import { ToastPosition } from "./components/toast/toast.type";
export namespace Components {
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
        "size": 'small' | 'default' | 'large';
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
    interface CpyContextMenu {
        "items": ContextMenuItem[];
    }
    interface CpyContextMenuItem {
        "item": ContextMenuItem;
    }
    interface CpyDrawer {
        "opened": boolean;
    }
    interface CpyDrawerContainer {
        "opened": boolean;
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
    interface CpyToolbar {
    }
    interface CpyTooltip {
        "position": 'bottom' | 'left' | 'right' | 'top';
        "text": string;
    }
}
export interface CpyAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyAlertElement;
}
export interface CpyDrawerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyDrawerElement;
}
export interface CpyDrawerContainerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyDrawerContainerElement;
}
export interface CpyNavMenuItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyNavMenuItemElement;
}
export interface CpyToastCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyToastElement;
}
declare global {
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
        "cpy-alert": HTMLCpyAlertElement;
        "cpy-avatar": HTMLCpyAvatarElement;
        "cpy-badge": HTMLCpyBadgeElement;
        "cpy-button": HTMLCpyButtonElement;
        "cpy-code-block": HTMLCpyCodeBlockElement;
        "cpy-context-menu": HTMLCpyContextMenuElement;
        "cpy-context-menu-item": HTMLCpyContextMenuItemElement;
        "cpy-drawer": HTMLCpyDrawerElement;
        "cpy-drawer-container": HTMLCpyDrawerContainerElement;
        "cpy-icon": HTMLCpyIconElement;
        "cpy-link": HTMLCpyLinkElement;
        "cpy-nav-menu": HTMLCpyNavMenuElement;
        "cpy-nav-menu-item": HTMLCpyNavMenuItemElement;
        "cpy-page-content": HTMLCpyPageContentElement;
        "cpy-popup": HTMLCpyPopupElement;
        "cpy-spinner": HTMLCpySpinnerElement;
        "cpy-table": HTMLCpyTableElement;
        "cpy-toast": HTMLCpyToastElement;
        "cpy-toolbar": HTMLCpyToolbarElement;
        "cpy-tooltip": HTMLCpyTooltipElement;
    }
}
declare namespace LocalJSX {
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
        "size"?: 'small' | 'default' | 'large';
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
    interface CpyContextMenu {
        "items"?: ContextMenuItem[];
    }
    interface CpyContextMenuItem {
        "item"?: ContextMenuItem;
    }
    interface CpyDrawer {
        "onToggleOpened"?: (event: CpyDrawerCustomEvent<void>) => void;
        "opened"?: boolean;
    }
    interface CpyDrawerContainer {
        "onToggleDrawer"?: (event: CpyDrawerContainerCustomEvent<void>) => void;
        "opened"?: boolean;
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
    interface CpyToolbar {
    }
    interface CpyTooltip {
        "position"?: 'bottom' | 'left' | 'right' | 'top';
        "text"?: string;
    }
    interface IntrinsicElements {
        "cpy-alert": CpyAlert;
        "cpy-avatar": CpyAvatar;
        "cpy-badge": CpyBadge;
        "cpy-button": CpyButton;
        "cpy-code-block": CpyCodeBlock;
        "cpy-context-menu": CpyContextMenu;
        "cpy-context-menu-item": CpyContextMenuItem;
        "cpy-drawer": CpyDrawer;
        "cpy-drawer-container": CpyDrawerContainer;
        "cpy-icon": CpyIcon;
        "cpy-link": CpyLink;
        "cpy-nav-menu": CpyNavMenu;
        "cpy-nav-menu-item": CpyNavMenuItem;
        "cpy-page-content": CpyPageContent;
        "cpy-popup": CpyPopup;
        "cpy-spinner": CpySpinner;
        "cpy-table": CpyTable;
        "cpy-toast": CpyToast;
        "cpy-toolbar": CpyToolbar;
        "cpy-tooltip": CpyTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cpy-alert": LocalJSX.CpyAlert & JSXBase.HTMLAttributes<HTMLCpyAlertElement>;
            "cpy-avatar": LocalJSX.CpyAvatar & JSXBase.HTMLAttributes<HTMLCpyAvatarElement>;
            "cpy-badge": LocalJSX.CpyBadge & JSXBase.HTMLAttributes<HTMLCpyBadgeElement>;
            "cpy-button": LocalJSX.CpyButton & JSXBase.HTMLAttributes<HTMLCpyButtonElement>;
            "cpy-code-block": LocalJSX.CpyCodeBlock & JSXBase.HTMLAttributes<HTMLCpyCodeBlockElement>;
            "cpy-context-menu": LocalJSX.CpyContextMenu & JSXBase.HTMLAttributes<HTMLCpyContextMenuElement>;
            "cpy-context-menu-item": LocalJSX.CpyContextMenuItem & JSXBase.HTMLAttributes<HTMLCpyContextMenuItemElement>;
            "cpy-drawer": LocalJSX.CpyDrawer & JSXBase.HTMLAttributes<HTMLCpyDrawerElement>;
            "cpy-drawer-container": LocalJSX.CpyDrawerContainer & JSXBase.HTMLAttributes<HTMLCpyDrawerContainerElement>;
            "cpy-icon": LocalJSX.CpyIcon & JSXBase.HTMLAttributes<HTMLCpyIconElement>;
            "cpy-link": LocalJSX.CpyLink & JSXBase.HTMLAttributes<HTMLCpyLinkElement>;
            "cpy-nav-menu": LocalJSX.CpyNavMenu & JSXBase.HTMLAttributes<HTMLCpyNavMenuElement>;
            "cpy-nav-menu-item": LocalJSX.CpyNavMenuItem & JSXBase.HTMLAttributes<HTMLCpyNavMenuItemElement>;
            "cpy-page-content": LocalJSX.CpyPageContent & JSXBase.HTMLAttributes<HTMLCpyPageContentElement>;
            "cpy-popup": LocalJSX.CpyPopup & JSXBase.HTMLAttributes<HTMLCpyPopupElement>;
            "cpy-spinner": LocalJSX.CpySpinner & JSXBase.HTMLAttributes<HTMLCpySpinnerElement>;
            "cpy-table": LocalJSX.CpyTable & JSXBase.HTMLAttributes<HTMLCpyTableElement>;
            "cpy-toast": LocalJSX.CpyToast & JSXBase.HTMLAttributes<HTMLCpyToastElement>;
            "cpy-toolbar": LocalJSX.CpyToolbar & JSXBase.HTMLAttributes<HTMLCpyToolbarElement>;
            "cpy-tooltip": LocalJSX.CpyTooltip & JSXBase.HTMLAttributes<HTMLCpyTooltipElement>;
        }
    }
}
