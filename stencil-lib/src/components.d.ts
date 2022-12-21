/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlertAppearance, AlertType } from "./components/alert/alert.type";
export namespace Components {
    interface CpyAlert {
        "alertTitle": string;
        "appearance": AlertAppearance;
        "container": boolean;
        "type": AlertType;
    }
    interface CpyIcon {
    }
}
declare global {
    interface HTMLCpyAlertElement extends Components.CpyAlert, HTMLStencilElement {
    }
    var HTMLCpyAlertElement: {
        prototype: HTMLCpyAlertElement;
        new (): HTMLCpyAlertElement;
    };
    interface HTMLCpyIconElement extends Components.CpyIcon, HTMLStencilElement {
    }
    var HTMLCpyIconElement: {
        prototype: HTMLCpyIconElement;
        new (): HTMLCpyIconElement;
    };
    interface HTMLElementTagNameMap {
        "cpy-alert": HTMLCpyAlertElement;
        "cpy-icon": HTMLCpyIconElement;
    }
}
declare namespace LocalJSX {
    interface CpyAlert {
        "alertTitle"?: string;
        "appearance"?: AlertAppearance;
        "container"?: boolean;
        "type"?: AlertType;
    }
    interface CpyIcon {
    }
    interface IntrinsicElements {
        "cpy-alert": CpyAlert;
        "cpy-icon": CpyIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cpy-alert": LocalJSX.CpyAlert & JSXBase.HTMLAttributes<HTMLCpyAlertElement>;
            "cpy-icon": LocalJSX.CpyIcon & JSXBase.HTMLAttributes<HTMLCpyIconElement>;
        }
    }
}