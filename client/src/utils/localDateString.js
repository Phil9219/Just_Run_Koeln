const toLocaleDateString = (date, locale = "de-DE") => {
  return new Date(date).toLocaleString(locale, {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
};
export default toLocaleDateString;
