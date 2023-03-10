import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'cpy-input-toggle',
  styleUrl: 'input-toggle.scss',
  shadow: true,
})
export class InputToggle {

  @Prop()
  label: string;

  @Prop({mutable: true})
  checked: boolean = false;

  @Prop()
  size: 'small' | 'default' | 'large' = 'default';

  @Event()
  checkedChange: EventEmitter<boolean>;

  handleChange(e: Event) {
    const target = e.target as HTMLInputElement
    this.checked = target.checked;
    this.checkedChange.emit(this.checked);
  }

  render() {
    const classes = {
      'toggle': true,
      [`toggle--${this.size}`]: !!this.size
    };

    return (
      <label class={classes}>
        <div class="toggle__switch">
          <input type="checkbox" checked={this.checked} onInput={(e) => this.handleChange(e)}/>
          <span class="toggle__slider"></span>
        </div>
        {this.label}
      </label>
    );
  }
}
