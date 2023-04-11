import { Component, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import weekdayPlugin from 'dayjs/plugin/weekday';
import objectPlugin from 'dayjs/plugin/toObject';
import isTodayPlugin from 'dayjs/plugin/isToday';
import utc from 'dayjs/plugin/utc';
import { getUserLocale } from '../../utils/user-locale';
import * as DateTime from '../../utils/date-time';

@Component({
  tag: 'cpy-calendar',
  styleUrl: 'calendar.scss',
  shadow: true,
})
export class Calendar {

  @Prop()
  date: string;

  @Watch('date')
  onDateChanged(newVal: string): void {
    if (!DateTime.isValid(newVal)) {
      return;
    }
    
    this.currentMonth = newVal
      ? dayjs.utc(newVal)
      : dayjs.utc();

    this.getAllDays();
  }

  @Event()
  dateChange: EventEmitter<string>;

  @State()
  currentMonth = dayjs.utc();

  @State()
  daysOfMonth: any[];

  formattedDateObject(date: dayjs.Dayjs) {
    const clonedObject = {...date.toObject()};
    const formattedObject = {
      day: clonedObject.date,
      month: clonedObject.months,
      year: clonedObject.years,
      isCurrentMonth: clonedObject.months === this.currentMonth.month(),
      isSelectedDay: this.date && date.isSame(this.date, 'day'),
      isoDate: date.toISOString()
    };
    return formattedObject;
  };

  getAllDays(): void {
    let currentDate = this.currentMonth.startOf('month').weekday(0);
    const nextMonth = this.currentMonth.add(1, 'month').month();
    let allDates = [];
    while (currentDate.weekday(0).toObject().months !== nextMonth) {
      const formatted = this.formattedDateObject(currentDate);
      allDates.push(formatted);
      currentDate = currentDate.add(1, 'day');
    }
    this.daysOfMonth = allDates;
  };

  handleDateChange(e: Event, date: any): void {
    e.stopPropagation();
    this.dateChange.emit(date.isoDate);
  }

  async componentWillLoad(): Promise<void> {
    dayjs.extend(weekdayPlugin);
    dayjs.extend(objectPlugin);
    dayjs.extend(isTodayPlugin);
    dayjs.extend(localizedFormat);
    dayjs.extend(customParseFormat);
    dayjs.extend(utc);
    const locale = await getUserLocale();
    dayjs.locale(locale);

    this.onDateChanged(this.date);
    this.getAllDays();
  }

  render() {
    const classes = {
      'calendar': true
    };

    const nextMonth = () => {
      const plus = this.currentMonth.add(1, 'month');
      this.currentMonth = plus;
      this.getAllDays();
    };
  
    const prevMonth = () => {
      const minus = this.currentMonth.subtract(1, 'month');
      this.currentMonth = minus;
      this.getAllDays();
    };
  
    const renderHeader = () => {
      const dateFormat = 'MMMM YYYY';
  
      return (
        <div class='calendar__header'>
          <cpy-button class='calendar__month' type='basic' appearance='borderless'>{this.currentMonth.format(dateFormat)}</cpy-button>

          <cpy-button type='basic' icon onClick={() => prevMonth()}>
            <cpy-icon>chevron_left</cpy-icon>
          </cpy-button>
          <cpy-button type='basic' icon onClick={() => nextMonth()}>
            <cpy-icon>chevron_right</cpy-icon>
          </cpy-button>
        </div>
      );
    };
  
    const renderDays = () => {
      const dateFormat = 'dd';
      const days = [];
  
      for (let i = 0; i < 7; i++) {
        days.push(
          <div key={i}>
            {this.currentMonth.weekday(i).format(dateFormat)}
          </div>
        );
      }
      return <div class='calendar__weekdays'>{days}</div>;
    };

    const renderCells = () => {
      const days = this.daysOfMonth.map((date, index) => (
        <div class={`
          calendar__day
          ${date.isSelectedDay && 'calendar__day--selected'}
        `} key={index}>
          <cpy-button
            size='small'
            icon
            type='basic'
            disabled={!date.isCurrentMonth}
            onClick={(e) => this.handleDateChange(e, date)}>
            <span class='calendar__day-text'>{date.day}</span>
          </cpy-button>
        </div>
      ));
      return <div class='calendar__dates'>{days}</div>;
    };
  
    return (
      <div class={classes}>
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    );
  }
}
