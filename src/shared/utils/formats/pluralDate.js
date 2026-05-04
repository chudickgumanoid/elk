const pluralRules = new Intl.PluralRules("ru-RU");

const getPluralForm = (number, singular, plural2to4, plural5plus) => {
  switch (pluralRules.select(number)) {
    case "one":
      return singular;
    case "few":
      return plural2to4;
    default:
      return plural5plus;
  }
};

export const pluralDate = (period, periodType) => {
  switch (periodType.toUpperCase()) {
    case "MINUTE":
      return `${period} ${getPluralForm(period, "минута", "минуты", "минут")}`;
    case "DAY":
      return `${period} ${getPluralForm(period, "день", "дня", "дней")}`;
    case "MONTH":
      return `${period} ${getPluralForm(period, "месяц", "месяца", "месяцев")}`;
    default:
      return `${period} ${periodType}`;
  }
};
