const dateFormatter = (inputDate) => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const date = new Date(inputDate);

  const dd = date.getDate();
  const mm = monthNames[date.getMonth()];
  const yyyy = date.getFullYear();
  const day = days[date.getDay()];

  return { dd, mm, yyyy, day };
};

export default dateFormatter;
