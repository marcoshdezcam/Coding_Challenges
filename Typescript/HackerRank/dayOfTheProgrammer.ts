interface Calendar {
  range: number[];
  months: number[];
  isLeap(year: number): boolean;
}

function dateFromYearAndCalendar(year: number, calendar: Calendar): string {
  let calculatedDay: number = 256,
    calculatedMonth = 0;

  for (const [month, days] of calendar.months.entries()) {
    calculatedDay = calculatedDay - days;
    calculatedMonth = month + 1;

    if (calculatedDay <= days) {
      calculatedMonth += 1;
      break;
    }
  }

  if (calendar.isLeap(year)) calculatedDay -= 1;

  // Add a 0 if string is only 1 char long => "1" to "01"
  let dayAsString: string =
    calculatedDay.toString().length === 1
      ? "0".concat(calculatedMonth.toString())
      : calculatedDay.toString();
  let monthAsString =
    calculatedMonth.toString().length === 1
      ? "0".concat(calculatedMonth.toString())
      : calculatedMonth.toString();

  let programersDate: string = dayAsString.concat(
    ".",
    monthAsString,
    ".",
    year.toString()
  );
  return programersDate;
}

function dayOfProgrammer(year: number): string {
  let julian: Calendar = {
    range: [1700, 1917],
    months: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    isLeap(year): boolean {
      return year % 4 === 0;
    },
  };
  let transition: Calendar = {
    //
    range: [1918],
    months: [31, 15, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    isLeap(year: number): boolean {
      return false;
    },
  };
  let gregorian: Calendar = {
    range: [1918, 2700],
    months: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    isLeap(year: number): boolean {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    },
  };

  let programmersDate: string =
    year >= julian.range[0] && year <= julian.range[1]
      ? dateFromYearAndCalendar(year, julian)
      : year === transition.range[0]
      ? dateFromYearAndCalendar(year, transition)
      : dateFromYearAndCalendar(year, gregorian);

  return programmersDate;
}
