import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import dayjs from 'dayjs';
import locale from 'dayjs/locale/en-gb';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';

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

  @Prop()
  format: string = 'DD/MM/YYYY';

  @Prop()
  size: 'small' | 'default' | 'large' = 'default';

  @Event()
  dateChange: EventEmitter<string>;

  isoDate: string;
  popupElem: HTMLCpyPopupElement;

  handleDateChange(date: string, hidePopup = true): void {
    console.log('handleDateChange', date);

    this.date = date;
    this.dateChange.emit(date);

    if (hidePopup) {
      this.popupElem.hidePopup();
    }
  }

  handleBlur(event: Event): void {
    const text = (event.target as HTMLInputElement).value;
    console.log(text, 'is valid', dayjs(text, this.format, 'en-gb').isValid());
    // console.log('date === input value', this.date, text);
    // console.log(dayjs.utc(text, this.format, false));
    if (dayjs(text, this.format, 'en-gb').isValid()) {
      return this.handleDateChange(dayjs(text, this.format, 'en-gb').toISOString(), false);
    }
    // else some form of validation check for the input
  }

  componentWillLoad(): void {
    dayjs.extend(localizedFormat);
    dayjs.extend(customParseFormat);
    dayjs.extend(utc);
    dayjs.locale(locale);
  }

  render() {
    const classes = {
      'date-picker': true,
      [`date-picker--${this.size}`]: !!this.size
    };

    const date = dayjs(this.date, this.format, 'en-gb');

    return (
      <label class={classes}>
        {this.label}
        <div class="date-picker__input">
          <input type="text" value={date.isValid() ? date.format(this.format) : ''} onBlur={e => this.handleBlur(e)}/>
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
