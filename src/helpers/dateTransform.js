import date from "date-and-time";
export const dateTransform = (forecastArray) => {
  let dateArray = [];
  let formatDate = [];
  const { forecastday } = forecastArray;
  forecastday.map((e) => {
    dateArray.push(e.date);
  });

  dateArray.map((e) => {
    const parseDate = date.parse(e, "YYYY-MM-DD");
    const newDate = date.format(parseDate, "ddd, MMM DD YYYY");
    formatDate.push(newDate);
  });

  return formatDate;
};
