import { Component, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';
import dayjs from 'dayjs';
import locale from 'dayjs/locale/en-gb';
import localizedFormat from 'dayjs/plugin/localizedFormat';

@Component({
  tag: 'cpy-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true,
})
export class DatePicker {

  @Prop()
  label: string;

  @Prop({mutable: true})
  date: string;

  @Watch('date')
  onDateChange(date: string): void {
    console.log(date);
    if (date) {
      this.dateObj = dayjs(date).locale({...locale});
    }
  }

  @Prop()
  size: 'small' | 'default' | 'large' = 'default';

  @Event()
  dateChange: EventEmitter<string>;

  dateObj: dayjs.Dayjs;
  popupElem: HTMLCpyPopupElement;

  handleDateChange(date: string): void {
    this.date = date;
    this.dateChange.emit(date);
    this.popupElem.togglePopup();
  }

  handleInputChange(event: Event): void {
    const text = (event.target as HTMLInputElement).value;
    console.log(text, 'is valid', dayjs(text, 'MM/DD/YYYY').isValid());
    if (dayjs(text, 'MM/DD/YYYY').isValid()) {
      this.handleDateChange(text);
      return;
    }
    // else some form of validation check for the input
  }

  componentWillLoad(): void {
    dayjs.extend(localizedFormat);

    this.onDateChange(this.date);
  }

  render() {
    const classes = {
      'date-picker': true,
      [`date-picker--${this.size}`]: !!this.size
    };

    return (
      <label class={classes}>
        {this.label}
        <div class="date-picker__input">
          <input type="text" value={this.dateObj?.format('L')} onInput={e => this.handleInputChange(e)}/>
          <cpy-popup position="bottom-end" offset={2} ref={(el) => this.popupElem = el as HTMLCpyPopupElement}>
            <cpy-button icon type="basic" size="small">
              <cpy-icon>today</cpy-icon>
            </cpy-button>

            <div slot="content">
              <cpy-calendar date={this.date} onDateChange={(e) => this.handleDateChange(e.detail)}></cpy-calendar>
            </div>
          </cpy-popup>
        </div>
      </label>
    );
  }
}
