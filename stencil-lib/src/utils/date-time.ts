import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from "dayjs/plugin/timezone";
import { getUserLocale } from './user-locale';

export async function loadDayJs(): Promise<void> {
  dayjs.extend(timezone);
  dayjs.extend(customParseFormat);
  dayjs.extend(localizedFormat);
  dayjs.extend(utc);
  const locale = await getUserLocale();
  dayjs.locale(locale);
}

export function getDate(dateStr: string, format?: string): dayjs.Dayjs {
  return dayjs.utc(dateStr, format);
}

export function getDateTime(dateStr: string, format?: string): dayjs.Dayjs {
  return dayjs(dateStr, format);
}

export function isValid(dateStr: string, format?: string): boolean {
  return dayjs(dateStr, format).isValid();
}
