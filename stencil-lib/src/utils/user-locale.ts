import localeEnGb from 'dayjs/locale/en-gb';

const locales = {
  [`en-gb`]: () => import('dayjs/locale/en-gb'),
  [`fr`]: () => import('dayjs/locale/fr'),
}

export async function getUserLocale(): Promise<ILocale> {
  let language = navigator.language.toLowerCase();

  try {
    if (!locales.hasOwnProperty(language)) {
      // fallback to generic language
      language = language.split('-')[0];
    }
    const locale = await locales[language]?.();
    if (locale) {
      return locale;
    }
    console.error(`Could not find locale: ${language}`);
  } catch {
    console.error(`Could not find locale: ${language}`);
  }
  return localeEnGb;
}