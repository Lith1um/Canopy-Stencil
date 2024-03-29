import { Component, Event, EventEmitter, h, Method, Prop } from '@stencil/core';
import { InputSize } from './types/input-size.type';

@Component({
  tag: 'cpy-input-base',
  styleUrl: 'input-base.scss',
  shadow: true,
})
export class InputBase {

  @Prop()
  label: string;

  @Prop()
  required: boolean;

  @Prop()
  disabled: boolean;

  @Prop()
  noContainer: boolean = false;

  @Prop()
  size: InputSize = 'default';

  @Prop()
  interacted: boolean = false;

  @Prop()
  error: string;

  @Prop()
  popup: boolean = false;

  @Event()
  popupClosed: EventEmitter<void>;

  @Event()
  labelClicked: EventEmitter<void>;

  @Method()
  async closePopup(): Promise<void> {
    if (this.popup) {
      this.popupElem.hide();
    }
  }

  popupElem: HTMLCpyPopupElement;

  handleLabelClick(): void {
    if (this.disabled) {
      return;
    }
    if (this.popup) {
      this.popupElem.show();
    }
    this.labelClicked.emit();
  }

  render() {
    const classes = {
      'input-base': true,
      'input-base--disabled': this.disabled,
      'input-base--invalid': this.interacted && !!this.error,
      [`input-base--${this.size}`]: !!this.size,
      [`input-base--no-container`]: this.noContainer
    };

    const labelClasses = {
      'input-base__label': true,
      'input-base__label--required': this.required
    };

    return [
      <label class={classes} onClick={() => this.handleLabelClick()}>
        {this.label && <div class={labelClasses}>
          {this.label}
        </div>}

        {this.popup
          ? <cpy-popup
              style={{display: 'block'}}
              stretch={true}
              disabled={this.disabled}
              ref={(el) => this.popupElem = el as HTMLCpyPopupElement}
              onClosed={() => this.popupClosed.emit()}>
              <div class='input-base__container'>
                <slot name='prefix'/>

                <div class='input-base__input'>
                  <slot/>
                </div>

                <slot name='suffix'/>
              </div>

              <div slot='content' class='input-base__dropdown'>
                <slot name='popup-content'/>
              </div>
            </cpy-popup>
          : <div class='input-base__container'>
              <slot name='prefix'/>

              <div class='input-base__input'>
                <slot/>
              </div>

              <slot name='suffix'/>
            </div>}
      </label>,
      !this.disabled && this.interacted && this.error
        && <div class='input-base__errors'>{this.error}</div>
    ];
  }
}
