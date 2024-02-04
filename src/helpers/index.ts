function convertDate(newDate: Date) {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  const convertedNewDate = newDate.toLocaleDateString("id-ID", options);
  return convertedNewDate;
}

function countMonths(startDate: Date, endDate: Date) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startYear = start.getFullYear();
  const startMonth = start.getMonth();

  const endYear = end.getFullYear();
  const endMonth = end.getMonth();

  const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  return months;
}

export { convertDate, countMonths };
