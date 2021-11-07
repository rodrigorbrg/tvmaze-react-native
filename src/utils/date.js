import moment from 'moment';

const formatYearDate = (date) => {
  if (date) {
    return moment(date).format('YYYY');
  } else {
    return '?';
  }
};

const formatPeriodDate = (started, ended) => {
  console.log('formatPeriodDate', started, ended)
  return `${formatYearDate(started)} - ${formatYearDate(ended)}`;
};

export {
  formatYearDate,
  formatPeriodDate,
}
