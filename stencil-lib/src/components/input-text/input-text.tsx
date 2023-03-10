import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'cpy-input-text',
  styleUrl: 'input-text.scss',
  shadow: true,
})
export class InputText {

  @Prop()
  label: string;

  @Prop()
  required: boolean;

  @Prop({mutable: true})
  value: string;

  @Prop()
  size: 'small' | 'default' | 'large' = 'default';

  @Event()
  valueChange: EventEmitter<string>;

  handleChange(e: Event) {
    const target = e.target as HTMLInputElement
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  render() {
    const classes = {
      'input-text': true,
      [`input-text--${this.size}`]: !!this.size
    };

    const labelClasses = {
      'input-text__label': true,
      'input-text__label--required': this.required
    };    

    return (
      <label class={classes}>
        <div class={labelClasses}>
          {this.label}
        </div>
        <div class="input-text__input">
          <slot name='prefix'/>
          <input type="text" value={this.value} onInput={(e) => this.handleChange(e)}/>
          <slot name='suffix'/>
        </div>
      </label>
    );
  }
}
