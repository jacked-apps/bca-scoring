export const readableDate = (date) => {
  if (typeof date === 'string') {
    return date;
  }
  const dateString = `${date.getMonth() + 1}-${
    date.getDate() + 1
  }-${date.getFullYear()}`;
  //console.log('dateString;', dateString);
  return dateString;
};

export const storableToReadableDate = (storableDate) => {
  // Ensure it is a storable date
  if (!isStorableDate(storableDate)) return 'Not a valid date.';
  // convert to date object then convert to readableDate
  return readableDate(new Date(storableDate));
};

export const readableToStorableDateString = (readableDate) => {
  const formattedCorrectly = isMM_DD_YYYY(readableDate);
  if (!formattedCorrectly) {
    return readableDate;
  }
  // split into parts
  const [month, day, year] = readableDate.split('-');
  // convert to iso8601 date string
  const date = `${year}-${month}-${day}`;

  return date;
};

export const isMM_DD_YYYY = (dateString) => {
  // First, check the format using a regular expression
  const regex =
    /^([1-9]|0[1-9]|1[012])-([1-9]|[0][1-9]|[12][0-9]|3[01])-(19|20)\d\d$/; // MM-DD-YYYY or M-D-YYYY

  // const regex2 = /^(0[1-9]|1[012])- (0[1-9]|[12][0-9]|3[01])-(19|20)\d\d$/; //MM-DD-YYYY

  dateString = dateString.trim();
  const match = regex.test(dateString);
  console.log('match: ', match, dateString);
  return match;
};

export const isStorableDate = (storableDate) => {
  const date = new Date(storableDate);
  return !isNaN(date.getTime());
};
